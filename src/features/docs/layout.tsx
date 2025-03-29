`use client`;

import { File, Folder } from "@/components/magicui/file-tree";
import { cn } from "@/lib/utils";
import { useAtom, useSetAtom } from "jotai";
import React, { useEffect } from "react";
import { CodeHighlighter } from "./components/code-highlighter";
import { DocsFileTree } from "./components/docs-file-tree";
import { Column, TwoColumnLayout } from "./components/two-column-layout";
import { currentFileAtom, currentFileContentAtom } from "./store/docs.store";
import type { FileContent, TreeNode } from "./types";
import { mockFileContents, mockFileTree } from "./types";

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
  const setCurrentFileContent = useSetAtom(currentFileContentAtom);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  useEffect(() => {
    const currentContent = getCurrentContent({ currentFilePath });
    setCurrentFileContent(currentContent);
  }, [currentFilePath]);

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
    <div className="flex flex-col h-full">
      {/* Mobile Toolbar */}
      <div className="md:hidden flex items-center justify-between p-4 border-b">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 hover:bg-accent rounded-md"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-5"
          >
            <path d="M21 7H3M21 12H3M21 17H3" />
          </svg>
        </button>
        <div className="text-sm font-medium truncate flex-1 px-4">
          {currentFilePath || "Select a file"}
        </div>
      </div>

      <TwoColumnLayout className="border rounded-md">
        <Column className="w-full border-r border-dashed">
          <div className="p-4">
            {currentContent ? (
              <CodeHighlighter code={currentContent} />
            ) : (
              <p className="text-muted-foreground">
                Select a file from the tree to view its content.
              </p>
            )}
          </div>
        </Column>
        <Column
          className={cn(
            "w-full md:w-80 lg:w-96",
            "fixed md:relative inset-0 bg-background z-50 transition-transform duration-200",
            isMobileMenuOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          )}
        >
          {/* Mobile Close Button */}
          <div className="md:hidden flex items-center justify-end p-4 border-b">
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              className="p-2 hover:bg-accent rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-5"
              >
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <DocsFileTree />
        </Column>
      </TwoColumnLayout>
    </div>
  );
}
