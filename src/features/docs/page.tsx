import { AppDock } from "@/components/app-dock";
import { DocsLayout } from "./layout";

export function DocsPage() {
  return (
    <div className=" h-full w-full flex flex-col relative">
      <AppDock />
      <DocsLayout />
    </div>
  );
}
