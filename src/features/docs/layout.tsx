`use client`;

import { File, Folder } from "@/components/magicui/file-tree";
import { useAtom } from "jotai";
import { CodeHighlighter } from "./components/code-highlighter";
import { DocsFileTree } from "./components/docs-file-tree";
import { Column, TwoColumnLayout } from "./components/two-column-layout";
import { currentFileAtom } from "./store/docs.store";
import type { FileContent, TreeNode } from "./types"; // Import types using 'import type'
import { mockFileContents, mockFileTree } from "./types"; // Import values (mock data)
import { DocsToolbar } from "./components/docs-toolbar";

// Helper function to find a node by PATH (recursive)
const findNodeByPath = (nodes: TreeNode[], path: string): TreeNode | null => {
  for (const node of nodes) {
    if (node.path === path) {
      return node;
    }
    if (node.type === "folder" && node.children) {
      const found = findNodeByPath(node.children, path);
      if (found) return found;
    }
  }
  return null;
};

// Helper function to find file content by path (accepts FileContent[])
const findContentByPath = (
  contents: FileContent[],
  path: string
): string | null => {
  const found = contents.find((content) => content.path === path);
  // console.log({
  //   found,
  // });
  return found ? found.content : null;
};

export function DocsLayout() {
  const [currentFilePath, setCurrentFilePath] = useAtom(currentFileAtom);

  function getCurrentContent({ currentFilePath }: { currentFilePath: string }) {
    console.log({ currentFilePath });
    if (!currentFilePath) return null;
    const node = findNodeByPath(mockFileTree, currentFilePath);
    console.log({ node });
    if (!node) return `Content not found for ${currentFilePath}.`;
    if (node?.type === "file") {
      return findContentByPath(mockFileContents, node.path);
    }
    return null;
  }

  const currentContent = getCurrentContent({ currentFilePath });
  console.log({ len: currentContent?.length });

  const renderTree = (nodes: TreeNode[]) => {
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
            {node.children && renderTree(node.children)}
          </Folder>
        );
      }
      // It's a file (type === 'file')
      return (
        <File
          key={node.path}
          value={node.path}
          isSelectable={node.isSelectable} // Use isSelectable from our definition
          // Pass the handleSelect function
          onClick={() => setCurrentFilePath(node.path)}
        >
          {node.name}
        </File>
      );
    });
  };

  return (
    <TwoColumnLayout className="border rounded-md">
      <Column className="w-full border-r border-dashed">
        <div>
          {currentContent ? (
            <CodeHighlighter code={currentContent} />
          ) : (
            <p className="text-muted-foreground">
              Select a file from the tree to view its content.
            </p>
          )}
        </div>
      </Column>
      <Column className="w-100">
        <DocsFileTree />
      </Column>
    </TwoColumnLayout>
  );
}
