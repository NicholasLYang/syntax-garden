import { isValidElement, type ComponentProps, type ReactNode } from "react";

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

function languageFromChildren(children: ReactNode): string | undefined {
  if (!isValidElement<{ className?: string }>(children)) return undefined;
  const match = /\blanguage-([\w+#-]+)/.exec(children.props.className ?? "");
  if (!match) return undefined;
  const id = match[1].toLowerCase();
  return LANGUAGE_NAMES[id] ?? id;
}

export function CodeBlock({ children, ...props }: ComponentProps<"pre">) {
  const language = languageFromChildren(children);
  return (
    <pre {...props}>
      {language && <span className="code-language">{language}</span>}
      {children}
    </pre>
  );
}
