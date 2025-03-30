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
      initialExpandedItems={extractAllFolderPaths(mockFileTree)}
      className="p-4 h-full overflow-y-auto space-y-1"
    >
      {renderTree({ handleSelect, nodes: mockFileTree })}
    </Tree>
  );
}
