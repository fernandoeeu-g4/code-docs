import { DockIcon } from "@/components/magicui/dock";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Sparkles } from "lucide-react";
import { useState } from "react";

export function DockProfileButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger className="">
        <DockIcon>
          <Tooltip>
            <TooltipTrigger>
              <Sparkles className="size-6" />
            </TooltipTrigger>
            <TooltipContent>Alterar modo</TooltipContent>
          </Tooltip>
        </DockIcon>
      </PopoverTrigger>
      <PopoverContent className="rounded-xl border border-zinc-950/10 bg-white p-0 shadow-[0_9px_9px_0px_rgba(0,0,0,0.01),_0_2px_5px_0px_rgba(0,0,0,0.06)] dark:bg-zinc-700">
        <div className="h-[200px] w-[364px]">oi</div>
      </PopoverContent>
    </Popover>
  );
}
