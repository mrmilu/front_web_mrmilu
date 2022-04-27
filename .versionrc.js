const { readdirSync } = require("fs");

const PACKAGES_ROOT_DIR = `${__dirname}/packages`;

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const packageDirectories = getDirectories(PACKAGES_ROOT_DIR);

module.exports = {
  bumpFiles: packageDirectories.map((packageDir) => ({
    filename: `${PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  })),
  tagPrefix: "front_web_mrmilu",
  releaseCommitMessageFormat: "chore(release): front_web_mrmilu@{{currentTag}}"
};
