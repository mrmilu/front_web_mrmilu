import util from "util";
import childProcess from "child_process";
const exec = util.promisify(childProcess.exec);
import chalk from "chalk";
const error = chalk.bold.red;

const run = async () => {
  try {
    const { stdout } = await exec("git rev-parse --abbrev-ref HEAD");
    if (typeof stdout === "string" && stdout.trim() === "master") {
      const { stdout } = await exec("git log -1 --format=%s");
      if (!stdout.includes("[skip ci]")) {
        console.log(error("You are pushing to master without a [skip ci] commit message. Please run 'yarn skip-ci' before pushing"));
        process.exit(1);
      }
    }
  } catch (e) {
    console.log(error(e));
    process.exit(1);
  }
};
run();
