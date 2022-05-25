const fs = require("fs");
const tempFile = require("../utils/dir").tempFile;

const run = async () => {
  const readme = fs.readFileSync(`${__dirname}/../README.md`, "utf8");
  const readmeReplaced = readme.replace(
    "## Front Web Mr.Milú package\n" +
      "\n" +
      "![](./coverage/badge.svg)\n" +
      "\n" +
      "This package collects a handful amount of methods, classes, interfaces, hooks and more that can and should be reused\n" +
      "across any Mr.Milú project.\n" +
      "\n" +
      "### [API Docs](https://mrmilu.github.io/front_web_mrmilu/)",
    "---\n" +
      "sidebar_position: 1\n" +
      "---\n" +
      "\n" +
      "# Intro\n" +
      "\n" +
      "This package collects a handful amount of methods, classes, interfaces, hooks and more that can and should be reused\n" +
      "across any Mr.Milú project.\n"
  );
  const tempReadme = await tempFile("intro2.md", readmeReplaced);
  fs.copyFileSync(tempReadme, `${__dirname}/../api-docs/docs/intro.md`);
};

run();
