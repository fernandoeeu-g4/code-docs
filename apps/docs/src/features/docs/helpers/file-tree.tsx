import { File, Folder } from "@/components/magicui/file-tree";
import type { TreeNode } from "../types";
import { useAtomValue } from "jotai";
import { currentFileAtom } from "../store/docs.store";
import { cn } from "@/lib/utils";

interface RenderTreeProps {
  nodes: TreeNode[];
  handleSelect: (path: string) => void;
}

export function renderTree({ nodes, handleSelect }: RenderTreeProps) {
  const currentPath = useAtomValue(currentFileAtom);

  return nodes.map((node) => {
    if (node.type === "folder") {
      return (
        <Folder
          key={node.path}
          value={node.path}
          element={node.name}
          isSelectable={node.isSelectable}
          className={cn(
            "hover:bg-accent/50 rounded-md transition-colors",
            "touch-target-16" // Larger touch target on mobile
          )}
        >
          {node.children && renderTree({ nodes: node.children, handleSelect })}
        </Folder>
      );
    }

    return (
      <File
        key={node.path}
        value={node.path}
        isSelectable={node.isSelectable}
        onClick={() => handleSelect(node.path)}
        className={cn(
          " hover:bg-accent/50 rounded-md transition-colors",
          "touch-target-16", // Larger touch target on mobile
          currentPath === node.path && "bg-accent/50"
        )}
      >
        {node.name}
      </File>
    );
  });
}

export const getLangFromPath = (path: string): string => {
  const extension = path.split(".").pop()?.toLowerCase();
  switch (extension) {
    case "ts":
      return "typescript";
    case "tsx":
      return "tsx";
    case "js":
      return "javascript";
    case "jsx":
      return "jsx";
    case "json":
      return "json";
    case "md":
      return "markdown";
    case "css":
      return "css";
    case "html":
      return "html";
    // Add more mappings as needed
    default:
      return "plaintext"; // Fallback language
  }
};
