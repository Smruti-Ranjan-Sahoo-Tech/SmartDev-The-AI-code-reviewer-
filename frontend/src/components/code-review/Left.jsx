import React, { useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import { useCodeReviewStore } from "../../store/useCodeReviewStore";

// Theme
import "prismjs/themes/prism-tomorrow.css";

// Core
import "prismjs/components/prism-markup";
import "prismjs/components/prism-markup-templating";

// Web
import "prismjs/components/prism-css";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-tsx";

// Backend / System
import "prismjs/components/prism-java";
import "prismjs/components/prism-c";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-python";
import "prismjs/components/prism-php";
import "prismjs/components/prism-json";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-sql";

// Language map
const LANGUAGES = {
  html: Prism.languages.markup,
  css: Prism.languages.css,
  javascript: Prism.languages.javascript,
  jsx: Prism.languages.jsx,
  typescript: Prism.languages.typescript,
  tsx: Prism.languages.tsx,
  java: Prism.languages.java,
  c: Prism.languages.c,
  cpp: Prism.languages.cpp,
  python: Prism.languages.python,
  php: Prism.languages.php,
  json: Prism.languages.json,
  bash: Prism.languages.bash,
  sql: Prism.languages.sql,
};

// Default templates
const DEFAULT_CODE = {
  html: "<h1>Hello HTML</h1>",
  css: "body { background: #000; color: #fff; }",
  javascript: 'console.log("Hello JavaScript");',
  jsx: "export default function App() { return <h1>Hello JSX</h1>; }",
  typescript: 'let msg: string = "Hello TS";',
  tsx: "const App = () => <h1>Hello TSX</h1>;",
  java: "public class Main {\n  public static void main(String[] args) {}\n}",
  c: "#include <stdio.h>\nint main() {}",
  cpp: "#include <iostream>\nint main() {}",
  python: 'print("Hello Python")',
  php: "<?php echo 'Hello PHP'; ?>",
  json: '{ "name": "student" }',
  bash: "echo Hello",
  sql: "SELECT * FROM users;",
};

const Left = () => {
  const [lang, setLang] = useState("javascript");
  const [code, setCode] = useState(DEFAULT_CODE.javascript);

  const { setReviewCode, sendCode } = useCodeReviewStore();

  const reviewClick = () => {
    setReviewCode(code);
    sendCode();
  };

  return (
    <div className="flex-1 h-[85%] border rounded-md bg-gray-950 relative overflow-hidden">
      
      {/* Language Selector (fixed) */}
      <select
        value={lang}
        onChange={(e) => {
          const l = e.target.value;
          setLang(l);
          setCode(DEFAULT_CODE[l] || "");
        }}
        className="absolute top-2 right-2 z-20 bg-gray-800 text-white text-sm px-2 py-1 rounded outline-none"
      >
        <option value="html">HTML</option>
        <option value="css">CSS</option>
        <option value="javascript">JavaScript</option>
        <option value="jsx">React (JSX)</option>
        <option value="typescript">TypeScript</option>
        <option value="tsx">React (TSX)</option>
        <option value="java">Java</option>
        <option value="c">C</option>
        <option value="cpp">C++</option>
        <option value="python">Python</option>
        <option value="php">PHP</option>
        <option value="json">JSON</option>
        <option value="bash">Shell</option>
        <option value="sql">SQL</option>
      </select>

      {/* Scrollable Editor ONLY */}
      <div className="h-full overflow-auto pt-12 pb-12 px-2">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) =>
            Prism.highlight(
              code,
              LANGUAGES[lang] || Prism.languages.javascript,
              lang
            )
          }
          padding={12}
          className="outline-none"
          style={{
            fontFamily: "monospace",
            fontSize: 14,
            color: "#fff",
            minHeight: "100%",
          }}
        />
      </div>

      {/* Review Button (fixed) */}
      <button
        onClick={reviewClick}
        className="absolute right-2 bottom-2 z-20 bg-green-600 text-white font-semibold px-3 py-1 rounded-md hover:bg-green-500 cursor-pointer"
      >
        Review
      </button>
    </div>
  );
};

export default Left;
