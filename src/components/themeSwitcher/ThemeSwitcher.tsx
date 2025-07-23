"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="sm"
      aria-label="Alternar tema claro/escuro"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="absolute top-2 right-2 cursor-pointer"
    >
      {isDark ? (
        <>
          <Moon className="w-5 h-5" />

        </>
      ) : (
        <>
          <Sun className="w-5 h-5" />
        </>
      )}
    </Button>
  );
}
