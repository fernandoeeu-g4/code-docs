"use client";

import * as React from "react";
import { useNavigate } from "@tanstack/react-router";
import { useAtom, useAtomValue } from "jotai";
import { BookOpen } from "lucide-react";

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

  function goToStack() {
    navigate({ to: "/docs/stack" });
    setOpen(false);
  }

  function goToDocs() {
    navigate({ to: "/docs" });
    setOpen(false);
  }

  return (
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Digite um comando ou pesquise..." />
      <CommandList>
        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
        <CommandGroup heading="Ferramentas">
          <CommandItem onSelect={goToDocs}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Documentação Interativa</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Ações">
          <CommandItem onSelect={copyCode}>
            <span>Copiar código</span>
            <CommandShortcut>⌘C</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={goToStack}>
            <span>Stack Frontend</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <span>CLI</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <span>Fluxo Git</span>
          </CommandItem>
        </CommandGroup>
        <CommandGroup heading="Documentação">
          <CommandItem onSelect={() => setOpen(false)}>
            <span>FAQ</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <span>Documentação</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <span>Guias</span>
          </CommandItem>
          <CommandItem onSelect={() => setOpen(false)}>
            <span>Recursos</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
