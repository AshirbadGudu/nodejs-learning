const express = require("express");
const app = express();

app
  .use((req, res, next) => {
    if (req.url === "/admin") return res.render("404", { name: "404" });
    next();
  })
  .set("view engine", "ejs")
  .use("/assets", express.static("assets"))
  .get("/:name", (req, res) => {
    const { name } = req.params;
    res.render("index", { name: name });
  })
  .listen(1337, () => console.log("listening on 1337"));
