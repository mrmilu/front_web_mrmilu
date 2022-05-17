const fs = require("fs");
const tempFile = require("../utils/dir").tempFile;

const run = async () => {
  const readme = fs.readFileSync(`${__dirname}/../README.md`, "utf8");
  const readmeReplaced = readme.replace(
    "## Front Web Mr.Milú package\n" + "\n" + "![](./coverage/badge.svg)",
    "---\n" + "sidebar_position: 1\n" + "---\n" + "\n" + "# Intro\n" + "\n" + "![](../../coverage/badge.svg)"
  );
  const tempReadme = await tempFile("intro2.md", readmeReplaced);
  fs.copyFileSync(tempReadme, `${__dirname}/../api-docs/docs/intro.md`);
};

run();
