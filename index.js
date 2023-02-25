const { response } = require("express");
const express = require("express");
const app = express();
const port = 3000;

const pool = require("./queries");
const data = require("./data");

app.use("/dvdrental", data);

pool.connect((err, res) => {
  if (err) {
    throw err;
  }
  console.log("connected");
});

app.listen(port);
