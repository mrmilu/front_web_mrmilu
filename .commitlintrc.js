const dirUtils = require("./utils/dir");
const packageDirectories = dirUtils.getDirectories(dirUtils.PACKAGES_ROOT_DIR);

module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["root", ...packageDirectories]],
    "scope-case": [2, "always", "snake-case"]
  }
};
