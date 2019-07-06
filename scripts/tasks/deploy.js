const { autoLoadConfigAsync } = require("../config");

const { ensureRepoAsync: ensureDocsRepoAsync } = require("./ensure-repo");

const docsRepoDir = repo => `__docs__/${repo}`;

exports.deployAsync = async () => {
  const { repo, branch } = autoLoadConfigAsync();
  await ensureDocsRepoAsync(repo, branch, docsRepoDir(repo));

  // copy repo to ./docs

  // build

  // TODO:
};
