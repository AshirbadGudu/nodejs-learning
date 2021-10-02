require("http")
  .createServer((request, response) => {
    response.setHeader("Content-Type", "application/json");

    switch (request.url) {
      case "/":
        return response.end(
          JSON.stringify({
            path: request.url,
            data: "Root Route",
          })
        );
      case "/products":
        return response.end(
          JSON.stringify({
            path: request.url,
            data: "Products Route",
          })
        );

      default:
        return response.end(
          JSON.stringify({
            path: request.url,
            data: "No data available here",
          })
        );
    }
  })
  .listen(1233)
  .on("listening", () => {
    console.log(`Server listening on http://localhost:1233`);
  });
