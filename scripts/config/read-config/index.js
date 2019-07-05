const { resolveConfigFileSync } = require("./auto-resolve-config-file");
const { configFromFileSync, configFromFileAsync } = require("./from-file");
const { configFromEnv } = require("./from-env");

const { mergeConfigs } = require("../merge");

exports.autoReadConfigSync = () => {
  const file = resolveConfigFileSync();
  const fileConfig = configFromFileSync(file);

  const envConfig = configFromEnv();

  return mergeConfigs(fileConfig, envConfig);
};

exports.autoReadConfigAsync = async () => {
  const file = resolveConfigFileSync();
  const fileConfig = await configFromFileAsync(file);

  const envConfig = configFromEnv();

  return mergeConfigs(fileConfig, envConfig);
};
