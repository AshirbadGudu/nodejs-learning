// Require fs module
const fs = require("fs"),
  // Store fetched data from the readme file
  readmeData = fs.readFileSync("README.md", "utf8");
// Print Fetched File Data
console.log(readmeData);
