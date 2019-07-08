const { autoLoadConfigSync } = require("./config");

const repoRegex = /^([^/]+\/[^/]+)(?:#(.+))?$/;

const gitUrl = (repo, ssh, absolute) =>
  ssh && absolute
    ? `ssh://git@github.com/${repo}.git`
    : ssh && !absolute
    ? `git@github.com:${repo}.git`
    : `https://github.com/${repo}.git`;

function getRepoAndBranch(s, prefix, ssh) {
  const [, repo, branch = "master"] = repoRegex.exec(s);
  return {
    [prefix + "repo"]: repo,
    [prefix + "repo_url"]: gitUrl(repo, ssh),
    [prefix + "branch"]: branch,
  };
}

exports.autoLoadSetupConfigAsEnvSync = () => {
  const c = autoLoadConfigSync();

  const exportEnvs = {
    ...getRepoAndBranch(c.docsRepo, "docs_", false),
    ...getRepoAndBranch(c.publishRepo, "publish_", false),
    publish_keep_history: c.keepPublishCommitHistory,
  };

  return Reflect.ownKeys(exportEnvs)
    .map(f => `export ${f}=${exportEnvs[f]}`)
    .join("\n");
};
