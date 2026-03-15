
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Toggle } from "@/components/ui/toggle";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <Toggle aria-label="Toggle theme" className="rounded-full p-2" pressed={false}>
        <Sun className="h-5 w-5" />
      </Toggle>
    );
  }

  const isDark = resolvedTheme === "dark";

  return (
    <Toggle 
      pressed={isDark}
      onPressedChange={toggleTheme} 
      aria-label="Toggle theme"
      className="rounded-full p-2 hover:bg-muted/50"
    >
      {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </Toggle>
  );
}
