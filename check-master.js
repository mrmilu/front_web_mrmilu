const util = require("util");
const exec = util.promisify(require("child_process").exec);

const run = async () => {
  try {
    const { stdout } = await exec("git rev-parse --abbrev-ref HEAD");
    if (typeof stdout === "string" && stdout.trim() === "master") {
      const { stdout } = await exec("git log -1 --format=%s");
      if (!stdout.includes("chore(root): [skip ci]")) {
        console.error("You are pushing to master without a [skip-ci] commit message. Please run 'yarn skip-ci' before pushing");
        process.exit(1);
      }
    }
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};
run();
