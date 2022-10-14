const API = "/api";

const productRouter = require("./product/controller/router");

module.exports = (app) => {
  app.get("/", (req, res) => {
    res.send("Welcome store api \n Please go to /api to use the endpoints");
  });
  app.get(API + "/", (req, res) => {
    res.send("Welcome to store api!\n You can use the endpoints here");
  });

  app.use(API, productRouter);
};
