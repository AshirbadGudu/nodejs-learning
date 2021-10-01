// Loads up the express module
const express = require("express");
// Creates an Express application
const app = express();
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false,
  })
);
// Define port number
const port = 1337;
// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get("/", (request, response) => {
  response.send("Hello Express JS");
});
app.post("/", (req, res) => {
  const { body } = req;
  console.log(body);
  return res.json({
    data: "Received a POST HTTP method",
    body: body,
  });
});

// Make the app listen on port 3000
app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});
