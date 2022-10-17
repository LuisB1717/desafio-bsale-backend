require("dotenv").config();
const express = require("express");
const app = express();
const Router = require("./src/router");

const PORT = process.env.PORT || 4000;

app.use('/', express.static(__dirname + '/public'));

app.use(express.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, Content-Type");
  res.header("Access-Control-Allow-Methods", "GET");
  next();
});

Router(app);

app.listen(PORT, () => console.log("Server started on port " + PORT));
