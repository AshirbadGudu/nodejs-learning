require("http")
  .createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");
    response.end(
      JSON.stringify({
        data: "JSON data from server",
      })
    );
  })
  .listen(1233)
  .on("listening", () => {
    console.log(`Server listening on http://localhost:1233`);
  });
