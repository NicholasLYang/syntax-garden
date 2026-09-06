import { defineConfig } from "vite";
import mdx from "@mdx-js/rollup";
import react from "@vitejs/plugin-react";
import remarkToc from "remark-toc";
import rehypePrettyCode from "rehype-pretty-code";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tanstackRouter({
      target: "react",
      autoCodeSplitting: true,
    }),
    mdx({
      remarkPlugins: [remarkToc],
      rehypePlugins: [
        [
          rehypePrettyCode,
          {
            theme: { light: "github-light", dark: "github-dark" },
            // Keep the <pre> background defined in CSS instead of inlining one.
            keepBackground: false,
          },
        ],
      ],
      providerImportSource: "@mdx-js/react",
    }),
    tailwindcss(),
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler"]],
      },
    }),
  ],
});
