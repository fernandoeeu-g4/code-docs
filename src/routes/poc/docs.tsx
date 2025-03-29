import { createFileRoute } from "@tanstack/react-router";
import React, { useRef, useState } from "react";
import Markdoc from "@markdoc/markdoc";
import listUsers from "@/features/docs/data/src/features/users/pages/list-users";
import { useQuery } from "@tanstack/react-query";
import { codeToHtml } from "shiki";
const markdown = listUsers;

// function DocsExample() {
//   // Parse the Markdown content
//   const ast = Markdoc.parse(markdown);

//   // Define the config with custom components
//   const config = {
//     tags: {
//       callout: {
//         render: "Callout",
//         attributes: {
//           type: {
//             type: String,
//             default: "note",
//             matches: ["note", "warning"],
//           },
//         },
//       },
//     },
//   };

//   // Transform the AST
//   const content = Markdoc.transform(ast, config);

//   // Define the components mapping
//   const components = {
//     Callout,
//   };

//   // Render the content
//   return (
//     <div className="docs-container">
//       {Markdoc.renderers.react(content, React, { components })}
//     </div>
//   );
// }

export const Route = createFileRoute("/poc/docs")({
  // component: DocsExample,
  component: () => {
    const [input, setInput] = useState("// Type your code here...");

    const textareaRef = useRef(null);
    const { data, isPending } = useQuery({
      queryKey: ["listUsers", markdown],
      queryFn: () => {
        return codeToHtml(markdown, {
          lang: "typescript",
          theme: "github-light",
        });
      },
    });
    const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setInput(e.target.value);
    };
    if (isPending) return <div>Loading...</div>;
    return (
      <div className="flex flex-col gap-4">
        <textarea
          ref={textareaRef}
          value={input}
          onChange={handleInputChange}
          className="w-full h-48 text-base leading-6 p-4 whitespace-pre font-mono bg-gray-100 border border-gray-300 rounded-lg resize-none relative z-10"
        />
        <div dangerouslySetInnerHTML={{ __html: data ?? "" }} />
      </div>
    );
  },
});
