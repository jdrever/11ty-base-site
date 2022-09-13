const purgeCssPlugin = require("eleventy-plugin-purgecss");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("images/");
  eleventyConfig.addPassthroughCopy("css/");


  eleventyConfig.addPlugin(purgeCssPlugin, {
    // Optional: Specify the location of your PurgeCSS config
    config: "./purgecss.config.js",

    // Optional: Set quiet: true to suppress terminal output
    quiet: false,
  });
}