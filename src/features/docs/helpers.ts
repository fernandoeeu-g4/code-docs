import type { TreeNode } from "./types";

export function extractAllFolderPaths(nodes: TreeNode[]): string[] {
  const result: string[] = [];

  function traverse(node: TreeNode) {
    if (node.type === "folder") {
      result.push(node.path); // adiciona o path da pasta atual
      node.children.forEach(traverse); // recursivamente percorre os filhos
    }
  }

  nodes.forEach(traverse);

  return result;
}
