import Editor from "react-simple-code-editor";
// @ts-ignore
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import { useState, useEffect } from "react";
type Props = {
  code: string;
};

export function CodeHighlighter({ code }: Props) {
  const [localCode, setLocalCode] = useState(code);
  console.log({ codeLen: code.length, localCodeLen: localCode.length });

  useEffect(() => {
    setLocalCode(code);
  }, [code]);

  return (
    <Editor
      value={localCode}
      onValueChange={(code) => setLocalCode(code)}
      highlight={(code) => highlight(code, languages.js)}
      padding={10}
      style={{
        fontFamily: '"Fira code", "Fira Mono", monospace',
        fontSize: 12,
        outline: "none",
      }}
      textareaClassName="outline-none"
    />
  );
}
