import * as React from "react";
import {
  BookOpen,
  Code2,
  Command,
  FileType,
  Home,
  LayoutGrid,
  Search,
} from "lucide-react";
import { useSetAtom } from "jotai";
import { Link } from "@tanstack/react-router";

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
      description: "Página inicial do projeto",
    },
    {
      name: "Documentação",
      url: "/docs",
      icon: BookOpen,
      description: "Documentação interativa do projeto",
    },
    {
      name: "Stack Frontend",
      url: "/docs/stack",
      icon: Code2,
      description: "Nossa stack de desenvolvimento frontend",
    },
    {
      name: "Componentes",
      url: "/docs/components",
      icon: LayoutGrid,
      description: "Biblioteca de componentes UI",
    },
    {
      name: "TypeScript",
      url: "/docs/typescript",
      icon: FileType,
      description: "Guia de TypeScript",
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
              <Link to="/">
                <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Command className="size-4" />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold text-xl">
                    Code Docs
                  </span>
                  <span className="truncate text-xs text-muted-foreground">
                    Documentação Interativa
                  </span>
                </div>
              </Link>
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
          <span className="text-sm">Buscar na documentação</span>
          <kbd className="pointer-events-none ml-auto inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground">
            <span className="text-xs">⌘</span>K
          </kbd>
        </Button>
        <CommandMenu />
      </div>

      <SidebarContent className="pb-8">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Documentação
          </h2>
          <div className="space-y-1">
            {data.features.map((item) => (
              <Button
                key={item.url}
                variant="ghost"
                asChild
                className="w-full justify-start gap-2"
              >
                <Link to={item.url}>
                  <item.icon className="h-4 w-4" />
                  {item.name}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}
