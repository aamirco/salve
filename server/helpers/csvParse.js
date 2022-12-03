const fs = require("fs");
const path = require("path");
const csv = require("fast-csv");

const csvParse = (filename) => {
  return new Promise((resolve, reject) => {
    const data = [];
    fs.createReadStream(path.resolve(__dirname, "..", "data", filename))
      .pipe(csv.parse({ headers: true }))
      .on("error", reject)
      .on("data", (row) => {
        data.push(row);
      })
      .on("end", () => {
        resolve(data);
      });
  });
};
module.exports = csvParse;
