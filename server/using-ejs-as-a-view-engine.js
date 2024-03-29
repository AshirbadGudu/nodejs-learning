const express = require("express");
const app = express();

app
  .set("view engine", "ejs")
  .get("/:name", (req, res) => {
    const { name } = req.params;
    res.render("index", { name: name });
  })
  .listen(1337, () => console.log("listening on 1337"));
