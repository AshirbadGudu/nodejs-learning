const fs = require("fs");

require("http")
  .createServer((request, response) => {
    // 1. Tell the browser everything is OK (Status code 200)
    response.writeHead(200, { "Content-Type": "text/html" });
    // 2. get data from the html file
    const publicDir = fs.createReadStream(
      `${__dirname}/public/index.html`,
      "utf8"
    );
    // 3. Write the announced text to the body of the page
    publicDir.pipe(response);
  })
  .listen(1337) // 4. Tells the server what port to be listen
  .on("listening", () => {
    console.log("Server listening at http://localhost:1337");
  });
