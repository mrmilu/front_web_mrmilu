const readdirSync = require("fs").readdirSync;

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
  packageFiles: packageDirectories.map((packageDir) => ({
    filename: `${PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  })),
  commitUrlFormat: "https://github.com/mrmilu/front_web_mrmilu/commit/{{hash}}",
  compareUrlFormat: "https://github.com/mrmilu/front_web_mrmilu/compare/{{previousTag}}...{{currentTag}}"
};
