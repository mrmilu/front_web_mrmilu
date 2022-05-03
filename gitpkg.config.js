module.exports = () => ({
  getTagName: (pkg) => `${pkg.name}-v${pkg.version}`
});
