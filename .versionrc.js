const dirUtils = require("./utils/dir");
const packageDirectories = dirUtils.getDirectories(dirUtils.PACKAGES_ROOT_DIR);

module.exports = {
  bumpFiles: packageDirectories.map((packageDir) => ({
    filename: `${dirUtils.PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  })),
  packageFiles: packageDirectories.map((packageDir) => ({
    filename: `${dirUtils.PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  })),
  releaseCommitMessageFormat: "chore(release): [skip-ci] {{currentTag}}"
};
