import { CommandMenu } from "@/components/app-command";
import { useTheme } from "@/components/theme-provider";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { commandDialogOpenAtom } from "@/store/command.store";
import { Link } from "@tanstack/react-router";
import { useSetAtom } from "jotai";
import { Search } from "lucide-react";

const darkModeColors = ["#FF0080", "#7928CA", "#0070F3"];
const lightModeColors = ["#ccf5e6", "#ffcab4", "#f7ffe0"];

export function HomePage() {
  const setCommandOpen = useSetAtom(commandDialogOpenAtom);
  const { theme } = useTheme();
  return (
    <AuroraBackground
      className="min-h-screen"
      colors={theme === "dark" ? darkModeColors : lightModeColors}
      speed={0.5}
      blur={150}
      opacity={0.2}
    >
      <div className="min-h-screen  flex flex-col font-[Poppins] overflow-hidden">
        <div className="flex-1 w-full max-w-6xl flex flex-col  px-60 py-22 relative">
          <h1 className="text-4xl md:text-5xl font-semibold text-foreground mb-4 ">
            Build better frontends with our docs 🚀
          </h1>
          <p className="text-lg text-muted-foreground mb-8  max-w-[600px]">
            Solve 80% of your frontend challenges with real-world examples,
            patterns, and best practices
          </p>
          <div className="w-full">
            <div
              role="button"
              className="p-4 cursor-pointer flex  items-center gap-2 w-100 text-sm rounded-2xl border border-input bg-transparent backdrop-blur-sm text-muted-foreground justify-start font-normal"
              onClick={() => setCommandOpen(true)}
            >
              <div className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                <span>Search for solutions</span>
              </div>
              <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
                <span className="text-xs">⌘</span>K
              </kbd>
            </div>
            <CommandMenu />
          </div>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <Link
              to="/docs"
              className="p-4 rounded-xl border border-input hover:border-ring transition-colors  backdrop-blur-sm group"
            >
              <h3 className="font-medium text-card-foreground group-hover:text-muted-foreground">
                📁 Folder Structure
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Real-world examples of scalable project organization
              </p>
            </Link>
            <Link
              to="/docs"
              className="p-4 rounded-xl border border-input hover:border-ring transition-colors  backdrop-blur-sm group"
            >
              <h3 className="font-medium text-card-foreground group-hover:text-muted-foreground">
                🧩 Component Patterns
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                Best practices for building reusable components
              </p>
            </Link>
          </div>
        </div>
      </div>
    </AuroraBackground>
  );
}
