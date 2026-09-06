import type { ComponentProps } from "react";

const LANGUAGE_NAMES: Record<string, string> = {
  c: "C",
  cpp: "C++",
  haskell: "Haskell",
  java: "Java",
  javascript: "JavaScript",
  js: "JavaScript",
  kotlin: "Kotlin",
  lisp: "Lisp",
  ocaml: "OCaml",
  python: "Python",
  ruby: "Ruby",
  rust: "Rust",
  typescript: "TypeScript",
  ts: "TypeScript",
};

// rehype-pretty-code puts the fence's language on the <pre> as data-language.
type PreProps = ComponentProps<"pre"> & { "data-language"?: string };

export function CodeBlock({ children, ...props }: PreProps) {
  const id = props["data-language"]?.toLowerCase();
  const language = id && (LANGUAGE_NAMES[id] ?? id);
  return (
    <pre {...props}>
      {language && <span className="code-language">{language}</span>}
      {children}
    </pre>
  );
}
