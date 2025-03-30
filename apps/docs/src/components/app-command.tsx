"use client";

import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAtom, useAtomValue } from "jotai";
import { BookOpen, Code2, FileType, LayoutGrid, Search } from "lucide-react";

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandShortcut,
} from "@/components/ui/command";
import { currentFileContentAtom } from "@/features/docs/store/docs.store";
import { commandDialogOpenAtom } from "@/store/command.store";
import { toast } from "sonner";

const navigationItems = [
  {
    name: "Documentação",
    url: "/docs",
    icon: BookOpen,
    shortcut: "⌘D",
  },
  {
    name: "Stack Frontend",
    url: "/docs/stack",
    icon: Code2,
    shortcut: "⌘S",
  },
  {
    name: "Componentes",
    url: "/docs/components",
    icon: LayoutGrid,
    shortcut: "⌘C",
  },
  {
    name: "TypeScript",
    url: "/docs/typescript",
    icon: FileType,
    shortcut: "⌘T",
  },
];

export function CommandMenu() {
  const navigate = useNavigate();
  const currentFileContent = useAtomValue(currentFileContentAtom);
  const [open, setOpen] = useAtom(commandDialogOpenAtom);

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [setOpen]);

  function copyCode() {
    if (currentFileContent) {
      navigator.clipboard.writeText(currentFileContent);
      toast.success("Código copiado para a área de transferência");
      setOpen(false);
    }
  }

  function navigateTo(url: string) {
    navigate({ to: url });
    setOpen(false);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="O que você está procurando?" />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

        <CommandGroup heading="Navegação">
          {navigationItems.map((item) => (
            <CommandItem key={item.url} onSelect={() => navigateTo(item.url)}>
              <item.icon className="mr-2 h-4 w-4" />
              <span>{item.name}</span>
              {item.shortcut && (
                <CommandShortcut>{item.shortcut}</CommandShortcut>
              )}
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandGroup heading="Ações">
          <CommandItem onSelect={copyCode}>
            <Search className="mr-2 h-4 w-4" />
            <span>Copiar código atual</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
        </CommandGroup>

        <CommandGroup heading="Recursos">
          <CommandItem
            onSelect={() => window.open("https://react.dev", "_blank")}
          >
            <span>React Docs</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open("https://www.typescriptlang.org/docs", "_blank")
            }
          >
            <span>TypeScript Docs</span>
          </CommandItem>
          <CommandItem
            onSelect={() =>
              window.open("https://tailwindcss.com/docs", "_blank")
            }
          >
            <span>Tailwind CSS</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
