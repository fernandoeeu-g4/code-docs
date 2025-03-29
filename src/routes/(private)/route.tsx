import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { DocsToolbar } from "@/features/docs/components/docs-toolbar";
import { currentFileAtom } from "@/features/docs/store/docs.store";
import { cn } from "@/lib/utils";
import { createFileRoute, Outlet } from "@tanstack/react-router";
import { useAtomValue } from "jotai";
import { Fragment } from "react";

export const Route = createFileRoute("/(private)")({
  component: RouteComponent,
});

function RouteComponent() {
  const currentFilePath = useAtomValue(currentFileAtom);
  const paths = currentFilePath?.split("/");
  return (
    <div className="flex bg-sidebar">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset className="flex flex-col h-svh">
          <header className="flex h-16 shrink-0 items-center gap-1 justify-between pl-4 pr-3">
            <div className="flex items-center gap-2">
              <SidebarTrigger className="-ml-1" />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {paths?.map((path, index) => {
                    const isLast = index === paths.length - 1;
                    return (
                      <Fragment key={path}>
                        <BreadcrumbItem>
                          <BreadcrumbLink
                            href="#"
                            className={cn(
                              isLast &&
                                "font-semibold text-pink-500 dark:text-pink-600"
                            )}
                          >
                            {path}
                          </BreadcrumbLink>
                        </BreadcrumbItem>
                        {!isLast && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                      </Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <DocsToolbar />
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-auto">
            <Outlet />
          </div>
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
