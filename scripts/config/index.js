const { autoReadConfigAsync, autoReadConfigSync } = require("./read-config");
const { validate } = require("./configs-all");

let cachedConfig = null;
let currentAutoLoadConfigPromise = null;

exports.autoLoadConfigAsync = ({ cache = true, reload = false } = {}) => {
  // should use and update cache
  if (cache) {
    // cache is available && cache is not updating && don't need reload
    if (cachedConfig && !currentAutoLoadConfigPromise && !reload) {
      return cachedConfig;
    }

    if (!currentAutoLoadConfigPromise) {
      currentAutoLoadConfigPromise = autoReadConfigAsync().then(config => {
        const validated = validate(config);

        cachedConfig = validated;

        currentAutoLoadConfigPromise = null;
        return validated;
      });
    }

    return currentAutoLoadConfigPromise;
  } else {
    return autoReadConfigAsync().then(config => validate(config));
  }
};

exports.autoLoadConfigSync = ({ cache = true, reload = false } = {}) => {
  if (cache && currentAutoLoadConfigPromise) {
    throw new Error("cached config is loading async");
  }

  if (cache && cachedConfig && !reload) {
    return cachedConfig;
  }

  const config = autoReadConfigSync();
  const validated = validate(config);

  if (cache) {
    cachedConfig = validated;
  }

  return validated;
};
