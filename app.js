const express = require("express");
const mongoose = require("mongoose");

const app = express();
const db = mongoose.connect("mongodb://localhost:27017/safetyRecalls");
const recallsRouter = express.Router();
/* const bodyParser = require("body-parser");
const cors = require("cors"); */

const port = process.env.PORT || 3000;
const Recalls = require("./models/safetyRecalls");

recallsRouter.route("/safetyRecalls")
.get((req, res) => {
  return res.json(safetyRecalls);
});
/* .get((req, res) => {
  const query = {};
  if (req.query.first_name) {
    query.first_name = req.query.first_name;
  }
  Recalls.find(query, (err, safetyRecalls) => {
    if (err) {
      return res.send(err);
    }
    return res.json(safetyRecalls);
  });
}); */

app.use("/api", recallsRouter);

app.get("/", (req, res) => {
  res.send("welcome to my API");
});

app.listen(port, () => {
  console.log(`running on ${port}`);
});
