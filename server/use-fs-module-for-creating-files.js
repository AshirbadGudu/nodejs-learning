// Require fs module
const fs = require("fs");
// Dynamic File name & Data for time
const currentTime = new Date().toLocaleString(),
  fileName = `${Date.now()}.md`;

// Write in file
fs.writeFileSync(fileName, currentTime);
