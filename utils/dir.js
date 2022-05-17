const readdirSync = require("fs").readdirSync;

const PACKAGES_ROOT_DIR = `${__dirname}/../packages`;

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);

const tempFile = (name = "temp_file", data = "", encoding = "utf8") => {
  const fs = require("fs");
  const os = require("os");
  const path = require("path");

  return new Promise((resolve, reject) => {
    const tempPath = path.join(os.tmpdir(), "foobar-");
    fs.mkdtemp(tempPath, (err, folder) => {
      if (err) return reject(err);

      const file_name = path.join(folder, name);

      fs.writeFile(file_name, data, encoding, (error_file) => {
        if (error_file) return reject(error_file);

        resolve(file_name);
      });
    });
  });
};

module.exports = {
  getDirectories,
  tempFile,
  PACKAGES_ROOT_DIR
};
