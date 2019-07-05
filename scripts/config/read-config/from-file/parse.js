const { extname } = require("path");

const fm = require("front-matter");

const configFileParsers = {
  md(content) {
    const { attributes } = fm(content);
    return attributes;
  },
};

exports.parseConfigFileContent = (filename, format, content) => {
  format = format || extname(filename) || filename;

  if (format.startsWith(".")) {
    format = format.slice(1);
  }

  if (typeof configFileParsers[format] === "undefined") {
    throw new Error(`${format} files and not supported as config files`);
  }

  return configFileParsers[format](content);
};
