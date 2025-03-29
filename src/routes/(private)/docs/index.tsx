import { DocsPage } from "@/features/docs/page";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(private)/docs/")({
  component: DocsPage,
  // component: () => (
  //   <div className="flex flex-col gap-2">
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //     <div className="min-h-20 bg-red-200">oi</div>
  //   </div>
  // ),
});
