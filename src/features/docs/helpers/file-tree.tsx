import { File, Folder } from "@/components/magicui/file-tree";
import type { TreeNode } from "../types";
import { useAtomValue } from "jotai";
import { currentFileAtom } from "../store/docs.store";
import { cn } from "@/lib/utils";

export const renderTree = ({
  handleSelect,
  nodes,
}: {
  handleSelect: (path: string) => void;
  nodes: TreeNode[];
}) => {
  const currentPath = useAtomValue(currentFileAtom);
  return nodes.map((node) => {
    // Check the type from our TreeNode definition
    if (node.type === "folder") {
      return (
        <Folder
          key={node.path}
          value={node.path}
          element={node.name}
          isSelectable={node.isSelectable} // Use isSelectable from our definition
        >
          {/* Recursively render children if they exist */}
          {node.children && renderTree({ handleSelect, nodes: node.children })}
        </Folder>
      );
    }
    // It's a file (type === 'file')

    return (
      <div
        className={cn(
          "p-1 rounded-md transition-colors",
          currentPath === node.path &&
            "bg-pink-100 dark:bg-pink-900 dark:text-white"
        )}
        key={node.path}
      >
        <File
          value={node.path}
          isSelectable={node.isSelectable} // Use isSelectable from our definition
          // Pass the handleSelect function
          onClick={() => handleSelect(node.path)}
        >
          {node.name}
        </File>
      </div>
    );
  });
};

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
