const express = require("express");
const app = express();
require("dotenv/config");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

app.use(bodyParser.json());
// import routes
const customersRoute = require("./customers");
const transitionsRoute = require("./transitions");

mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true }, () => {
  console.log("cennected to db");
});

app.use("/api/customers", customersRoute);
app.use("/api/transitions", transitionsRoute);

app.get("/", (req, res) => {
  res.send("we are at home");
});

app.listen(3000);
