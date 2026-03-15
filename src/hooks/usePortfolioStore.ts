import { useEffect, useMemo, useState } from "react";
import { defaultPortfolioData } from "@/data/defaultPortfolio";
import type { Certification, PortfolioData, Project } from "@/types/portfolio";

const STORAGE_KEY = "portfolio-data-v2";

function normalizeCvUrl(cvUrl: string): string {
  const trimmed = cvUrl.trim();

  const driveFileMatch = trimmed.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch?.[1]) {
    return `https://drive.google.com/uc?export=download&id=${driveFileMatch[1]}`;
  }

  return trimmed;
}

function readPortfolioData(): PortfolioData {
  if (typeof window === "undefined") {
    return defaultPortfolioData;
  }

  const rawData = window.localStorage.getItem(STORAGE_KEY);
  if (!rawData) {
    return defaultPortfolioData;
  }

  try {
    const parsed = JSON.parse(rawData) as PortfolioData;

    const parsedCvUrl = parsed.cvUrl?.trim();
    const shouldUseDefaultCv =
      !parsedCvUrl ||
      parsedCvUrl.endsWith("resume.txt") ||
      parsedCvUrl.endsWith("resume.pdf") ||
      parsedCvUrl.includes("/resume.txt") ||
      parsedCvUrl.includes("/resume.pdf");

    return {
      ...defaultPortfolioData,
      ...parsed,
      cvUrl: shouldUseDefaultCv ? defaultPortfolioData.cvUrl : normalizeCvUrl(parsedCvUrl),
      github: {
        ...defaultPortfolioData.github,
        ...parsed.github,
      },
    };
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
              id: `${project.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
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
              id: `${certification.name.toLowerCase().replace(/\s+/g, "-")}-${Date.now()}`,
            },
            ...prev.certifications,
          ],
        })),

      removeCertification: (certificationId: string) =>
        setData((prev) => ({
          ...prev,
          certifications: prev.certifications.filter((item) => item.id !== certificationId),
        })),

      resetAll: () => setData(defaultPortfolioData),
    }),
    [],
  );

  return { data, ...actions };
}
