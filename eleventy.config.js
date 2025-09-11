const markdownIt = require("markdown-it");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
    eleventyConfig.addPlugin(eleventyNavigationPlugin);

    eleventyConfig.addPassthroughCopy('src/assets');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addWatchTarget('src/js');
    eleventyConfig.addWatchTarget('src/css');

    eleventyConfig.addCollection("publications", (collection) => {
        return collection.getAll()[0].data.publications;
    });

    let options = {
        html: true
    };

    eleventyConfig.setLibrary("md", markdownIt(options));

    return {
        dir: {
            input: 'src',
        },
    };
};

