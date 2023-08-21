const express = require("express");

const app = express();

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.listen(port, () => {
  console.log("running on " + port);
});
