// Loads up the express module
const express = require("express");
// Creates an Express application
const app = express();
// Define port number
const port = 1337;
// Routes HTTP GET requests to the specified path "/" with the specified callback function
app.get("/", (request, response) => response.send("Hello ExpressJS"));
// Make the app listen on port 3000
app.listen(port, () => console.log(`Server is running on ${port}`));
