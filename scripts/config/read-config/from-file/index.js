const { promisify } = require("util");
const fs = require("fs");
const readFileAsync = promisify(fs.readFile);

const { parseConfigFileContent } = require("./parse");

const defaultFileEncoding = "utf8";

exports.configFromFileAsync = async (filename, format) => {
  const content = await readFileAsync(filename, defaultFileEncoding);

  return parseConfigFileContent(filename, format, content);
};

exports.configFromFileSync = (filename, format) => {
  const content = fs.readFileSync(filename, defaultFileEncoding);

  return parseConfigFileContent(filename, format, content);
};
