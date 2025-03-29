import * as React from "react";
import { BookOpen, Command, Home, Search } from "lucide-react";
import { useSetAtom } from "jotai";

import { NavProjects } from "@/components/nav-projects";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { CommandMenu } from "./app-command";
import { commandDialogOpenAtom } from "@/store/command.store";

const data = {
  features: [
    {
      name: "Home",
      url: "/",
      icon: Home,
    },
    {
      name: "Docs interativas",
      url: "/docs",
      icon: BookOpen,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const setCommandOpen = useSetAtom(commandDialogOpenAtom);

  return (
    <Sidebar variant="inset" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xl">Docs</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <div className="px-3 py-2">
        <Button
          variant="outline"
          className="w-full justify-start text-muted-foreground gap-2 h-9"
          onClick={() => setCommandOpen(true)}
        >
          <Search className="h-4 w-4" />
          <span className="text-sm">Search anything</span>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandMenu />
      </div>

      <SidebarContent>
        <NavProjects projects={data.features} />
      </SidebarContent>
    </Sidebar>
  );
}
