const { getDirectories, PACKAGES_ROOT_DIR } = require("./utils/dir");

const packageDirectories = getDirectories(PACKAGES_ROOT_DIR);

module.exports = {
  bumpFiles: packageDirectories.map((packageDir) => ({
    filename: `${PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  })),
  packageFiles: packageDirectories.map((packageDir) => ({
    filename: `${PACKAGES_ROOT_DIR}/${packageDir}/package.json`,
    type: "json"
  }))
};
