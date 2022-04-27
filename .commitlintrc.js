// eslint-disable-next-line @typescript-eslint/no-var-requires
// const { getDirectories, PACKAGES_ROOT_DIR } = require("./utils/dir");
//
// const packageDirectories = getDirectories(PACKAGES_ROOT_DIR);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["root"]],
    "scope-case": [2, "always", "snake-case"]
  }
};
