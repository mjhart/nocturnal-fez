import { eleventyImageTransformPlugin } from "@11ty/eleventy-img";

export default function(eleventyConfig) {
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};