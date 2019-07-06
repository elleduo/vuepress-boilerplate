const { autoLoadConfigSync } = require("./config");

const repoRegex = /^([^\/]+\/[^\/]+)(?:#(.+))?$/;

const gitUrl = repo => `https://github.com/${repo}.git`;

function getRepoAndBranch(s, prefix) {
  const [, repo, branch = "master"] = repoRegex.exec(s);
  return {
    [prefix + "repo"]: repo,
    [prefix + "repo_url"]: gitUrl(repo),
    [prefix + "branch"]: branch,
  };
}

exports.autoLoadSetupConfigAsEnvSync = () => {
  const c = autoLoadConfigSync();

  const exportEnvs = {
    ...getRepoAndBranch(c.docsRepo, "docs_"),
    ...getRepoAndBranch(c.publishRepo, "publish_"),
  };

  return Reflect.ownKeys(exportEnvs)
    .map(f => `export ${f}=${exportEnvs[f]}`)
    .join("\n");
};
