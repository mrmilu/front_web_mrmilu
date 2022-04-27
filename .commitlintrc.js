const readdirSync = require("fs").readdirSync;

const PACKAGES_ROOT_DIR = `${__dirname}/packages`;

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const packageDirectories = getDirectories(PACKAGES_ROOT_DIR);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["root", ...packageDirectories]],
    "scope-case": [2, "always", "snake-case"]
  }
};
