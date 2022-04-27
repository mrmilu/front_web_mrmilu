module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-empty": [2, "never"],
    "scope-enum": [2, "always", ["root", "network", "services", "uitls"]],
    "scope-case": [2, "always", "snake-case"]
  }
};
