import { buttonDependencies } from "./playground.data";

// @/components/ui/playground.tsx
("use client");

import { cn } from "@/lib/utils";
import {
  SandpackProvider,
  SandpackLayout,
  SandpackCodeEditor,
  SandpackPreview,
  SandpackConsole,
} from "@codesandbox/sandpack-react";
import { buttonExampleFiles } from "./playground.data";

interface PlaygroundProps {
  files?: Record<string, string>;
  template?: "react" | "vanilla" | "vue" | "angular" | "nextjs";
  theme?: "light" | "dark" | "auto";
  className?: string;
}

export function Playground({
  files,
  template = "react",
  theme = "auto",
  className,
}: PlaygroundProps) {
  // Use buttonExampleFiles if no files are provided
  const finalFiles = files || buttonExampleFiles;

  return (
    <div className={cn("rounded-lg border overflow-hidden ", className)}>
      <SandpackProvider
        template={template}
        theme={theme}
        files={finalFiles} // Use the finalFiles object
        customSetup={{
          // Add customSetup for dependencies
          dependencies: buttonDependencies,
        }}
        options={{
          // Keep existing externalResources for Tailwind
          externalResources: [
            "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4",
          ],
        }}
      >
        <SandpackLayout className="!rounded-none !border-none !bg-transparent flex flex-col h-full">
          <div className="flex flex-row flex-1 min-h-0 h-full">
            <div className="w-[30%] h-full border-r border-border">
              <SandpackCodeEditor
                showTabs
                style={{ height: "100%", width: "100%" }}
              />
            </div>
            <div className="flex-1 h-[800px]">
              <SandpackPreview
                showOpenInCodeSandbox={false}
                showRefreshButton
                style={{ height: "100%", width: "100%" }}
              />
            </div>
          </div>
          <div className="h-[20%] border-t border-border">
            <SandpackConsole style={{ height: "100%", width: "100%" }} />
          </div>
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
