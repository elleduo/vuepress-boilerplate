const fs = require("fs");
const path = require("path");

const files = ["config.md", "README.md"];

exports.resolveConfigFileSync = ({ absolute = false } = {}) => {
  for (const file of files) {
    if (fs.existsSync(file)) {
      return absolute ? path.resolve(file) : file;
    }
  }

  return null;
};
