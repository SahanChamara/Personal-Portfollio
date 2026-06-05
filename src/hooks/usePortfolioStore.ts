import { useEffect, useMemo, useState } from "react";
import { defaultPortfolioData } from "@/data/defaultPortfolio";
import type { Certification, LearningItem, PortfolioData, Project, ProjectCategory, StatMetric } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-data-v3";
const LEGACY_STORAGE_KEY = "portfolio-data-v2";
const LEGACY_CV_FILE_IDS = ["1Io0lELlrLOx_Xm5ihrL1r-odAtsg3Qul"];

function normalizeCvUrl(cvUrl: string): string {
  const trimmed = cvUrl.trim();
  const driveFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);

  if (driveFileMatch?.[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveFileMatch[1]}`;
  }

  return trimmed;
}

function splitList(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value.map(String).map((item) => item.trim()).filter(Boolean);
  }

  if (typeof value === "string") {
    return value
      .split(/[,\n]/)
      .map((item) => item.trim())
      .filter(Boolean);
  }

  return [];
}

function normalizeCategory(value: unknown): ProjectCategory {
  const allowed: ProjectCategory[] = ["Professional", "Personal", "AI/ML", "Academic"];
  return allowed.includes(value as ProjectCategory) ? (value as ProjectCategory) : "Personal";
}

function normalizeProject(project: Partial<Project> & Record<string, unknown>, index: number): Project {
  return {
    id: String(project.id || `project-${index}`),
    name: String(project.name || "Untitled Project"),
    type: String(project.type || "Portfolio Project"),
    category: normalizeCategory(project.category),
    description: String(project.description || project.summary || ""),
    techStack: splitList(project.techStack),
    highlights: splitList(project.highlights),
    metric: project.metric ? String(project.metric) : undefined,
    githubUrl: String(project.githubUrl || `https://github.com/${defaultPortfolioData.github.username}`),
    liveUrl: project.liveUrl ? String(project.liveUrl) : undefined,
  };
}

function normalizeCertification(certification: Partial<Certification> & Record<string, unknown>, index: number): Certification {
  return {
    id: String(certification.id || `certification-${index}`),
    name: String(certification.name || "Certification"),
    issuer: String(certification.issuer || "Issuer"),
    issued: String(certification.issued || "Completed"),
    group: String(certification.group || certification.issuer || "Other"),
    credentialUrl: certification.credentialUrl ? String(certification.credentialUrl) : undefined,
  };
}

function normalizeData(parsed: Partial<PortfolioData> & Record<string, unknown>): PortfolioData {
  const parsedCvUrl = typeof parsed.cvUrl === "string" ? parsed.cvUrl.trim() : "";
  const shouldUseDefaultCv =
    !parsedCvUrl ||
    parsedCvUrl.endsWith("resume.txt") ||
    parsedCvUrl.endsWith("resume.pdf") ||
    parsedCvUrl.includes("/resume.txt") ||
    parsedCvUrl.includes("/resume.pdf") ||
    LEGACY_CV_FILE_IDS.some((fileId) => parsedCvUrl.includes(fileId));

  return {
    ...defaultPortfolioData,
    ...parsed,
    cvUrl: shouldUseDefaultCv ? defaultPortfolioData.cvUrl : normalizeCvUrl(parsedCvUrl),
    socialLinks: Array.isArray(parsed.socialLinks) ? parsed.socialLinks : defaultPortfolioData.socialLinks,
    stats: Array.isArray(parsed.stats) ? (parsed.stats as StatMetric[]) : defaultPortfolioData.stats,
    skillCategories: Array.isArray(parsed.skillCategories)
      ? parsed.skillCategories
      : defaultPortfolioData.skillCategories,
    experiences: Array.isArray(parsed.experiences) ? parsed.experiences : defaultPortfolioData.experiences,
    projects: Array.isArray(parsed.projects)
      ? parsed.projects.map((project, index) => normalizeProject(project as Partial<Project> & Record<string, unknown>, index))
      : defaultPortfolioData.projects,
    certifications: Array.isArray(parsed.certifications)
      ? parsed.certifications.map((certification, index) =>
          normalizeCertification(certification as Partial<Certification> & Record<string, unknown>, index),
        )
      : defaultPortfolioData.certifications,
    education: Array.isArray(parsed.education) ? parsed.education : defaultPortfolioData.education,
    learning: Array.isArray(parsed.learning) ? (parsed.learning as LearningItem[]) : defaultPortfolioData.learning,
    github: {
      ...defaultPortfolioData.github,
      ...(typeof parsed.github === "object" && parsed.github ? parsed.github : {}),
    },
  };
}

function readPortfolioData(): PortfolioData {
  if (typeof window === "undefined") {
    return defaultPortfolioData;
  }

  const rawData = window.localStorage.getItem(STORAGE_KEY) || window.localStorage.getItem(LEGACY_STORAGE_KEY);
  if (!rawData) {
    return defaultPortfolioData;
  }

  try {
    return normalizeData(JSON.parse(rawData));
  } catch {
    return defaultPortfolioData;
  }
}

export function usePortfolioStore() {
  const [data, setData] = useState<PortfolioData>(defaultPortfolioData);

  useEffect(() => {
    setData(readPortfolioData());
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }
  }, [data]);

  const actions = useMemo(
    () => ({
      setCvUrl: (cvUrl: string) =>
        setData((prev) => ({
          ...prev,
          cvUrl: normalizeCvUrl(cvUrl),
        })),

      addProject: (project: Omit<Project, "id">) =>
        setData((prev) => ({
          ...prev,
          projects: [
            {
              ...project,
              id: `${project.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
            },
            ...prev.projects,
          ],
        })),

      removeProject: (projectId: string) =>
        setData((prev) => ({
          ...prev,
          projects: prev.projects.filter((project) => project.id !== projectId),
        })),

      addCertification: (certification: Omit<Certification, "id">) =>
        setData((prev) => ({
          ...prev,
          certifications: [
            {
              ...certification,
              id: `${certification.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${Date.now()}`,
            },
            ...prev.certifications,
          ],
        })),

      removeCertification: (certificationId: string) =>
        setData((prev) => ({
          ...prev,
          certifications: prev.certifications.filter((item) => item.id !== certificationId),
        })),

      updateLearning: (learning: LearningItem[]) =>
        setData((prev) => ({
          ...prev,
          learning,
        })),

      updateStats: (stats: StatMetric[]) =>
        setData((prev) => ({
          ...prev,
          stats,
        })),

      resetAll: () => setData(defaultPortfolioData),
    }),
    [],
  );

  return { data, ...actions };
}
