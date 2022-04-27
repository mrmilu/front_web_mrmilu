import { readdirSync } from "fs";

export const PACKAGES_ROOT_DIR = `${__dirname}/packages`;

export const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
