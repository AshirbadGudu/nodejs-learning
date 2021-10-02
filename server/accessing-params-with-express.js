const express = require("express");
const app = express();

app
  .get("/:name", (req, res) => {
    const { name } = req.params;
    res.send({
      data: `Hello ${name}`,
    });
  })
  .listen(1337, () => console.log("listening on 1337"));
