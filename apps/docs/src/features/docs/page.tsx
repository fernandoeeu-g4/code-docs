import { AppDock } from "@/components/app-dock";
import { DocsLayout } from "./layout";
import { MDXProvider } from "@mdx-js/react";

export function DocsPage() {
  return (
    <div className=" h-full w-full flex flex-col relative">
      <MDXProvider>
        {/* <Test /> */}
        <AppDock />
        <DocsLayout />
      </MDXProvider>
    </div>
  );
}
