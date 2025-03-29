import { Tree } from "@/components/magicui/file-tree";
import { extractAllFolderPaths } from "../helpers";
import { renderTree } from "../helpers/file-tree";
import { mockFileTree } from "../types";
import { useSetAtom } from "jotai";
import { currentFileAtom } from "../store/docs.store";

export function DocsFileTree() {
  const setCurrentFile = useSetAtom(currentFileAtom);
  function handleSelect(path: string) {
    setCurrentFile(path);
  }
  return (
    <Tree
      // all open by default (map over all folders ids)
      initialExpandedItems={extractAllFolderPaths(mockFileTree)}
      // Remove elements prop, we render children directly
      className="p-2 h-full"
      // The selectItem prop from TreeContext will be used internally by File component
      // but our handleSelect updates the state for content display
    >
      {/* Render our tree structure using the recursive function */}
      {renderTree({ handleSelect, nodes: mockFileTree })}
    </Tree>
  );
}
