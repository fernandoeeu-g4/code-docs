"use client";

import { ThemeToggle } from "./theme-toggle";

export function DocsToolbar() {
  return (
    <div className="flex items-center justify-end p-2 bg-background">
      <ThemeToggle />
    </div>
  );
}
