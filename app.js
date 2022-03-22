const conn = require("./model");
const express = require("express");
const router = require("./routes/post");

const bodyParser = require("body-parser");

const app = express();

app.use("/posts", router);
app.use(bodyParser.json());
app.get("/api", (req, res) => {
  res.send("Welcome");
});
app.listen(2500);
