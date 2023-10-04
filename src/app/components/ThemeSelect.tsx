"use client";

import { ChangeEvent, useEffect, useState } from "react";
import MoonIcon from "./ui/MoonIcon";
import { useTheme } from "next-themes";

export default function ThemeSelect() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const [systemTheme, setSystemTheme] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (systemTheme) {
      setTheme(systemTheme === "dark" ? "light" : "dark");
      setSystemTheme(null);
    } else {
      setTheme(theme === "dark" ? "light" : "dark");
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  // Detect if using system theme
  useEffect(() => {
    if (theme === "system") {
      const systemPrefersDark =
        typeof window !== "undefined" &&
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches;
      setSystemTheme(systemPrefersDark ? "dark" : "light");
    }
  }, [theme, systemTheme]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <label
        className="group flex cursor-pointer select-none items-center gap-5"
        htmlFor="theme-toggle"
      >
        <div className="relative">
          <input
            type="checkbox"
            onChange={handleChange}
            className="sr-only"
            defaultChecked={theme === "dark"}
            id="theme-toggle"
            name="theme-toggle"
          />
          <div
            className={`h-5 w-10 rounded-full ${
              theme === "dark" || systemTheme === "dark"
                ? "bg-purple"
                : "bg-neutral-400"
            } transition-colors group-hover:bg-purple`}
          ></div>
          <div
            className={`absolute left-[3px] top-[3px] flex h-[14px] w-[14px] items-center justify-center rounded-full bg-white transition ${
              theme === "dark" || systemTheme === "dark"
                ? "translate-x-[20px]"
                : "translate-x-0"
            }`}
          ></div>
        </div>

        <div className="h-5 w-5">
          <MoonIcon
            className={`transition-colors ${
              theme === "dark" || systemTheme === "dark"
                ? "stroke-purple"
                : "stroke-neutral-400"
            } group-hover:stroke-purple`}
          />
        </div>
      </label>
    </>
  );
}
