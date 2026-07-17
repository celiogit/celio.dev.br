import MarkdownIt from "markdown-it";
import markdownItAttrs from "markdown-it-attrs";
import markdownItImplicitFigures from "./markdown-it-implicit-figures.js";

export const md = new MarkdownIt({
  html: true,
  linkify: true,
  breaks: false,
})
  .use(markdownItAttrs)
  .use(markdownItImplicitFigures);

export default function (eleventyConfig) {
  eleventyConfig.setLibrary("md", md);
}

