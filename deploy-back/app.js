const express = require("express");
const cors = require("cors");
const app = express();

module.exports = async () => {
  const db = await require("./configs/db");
  app.use(cors());

  app.use(require("./services")(db));

  return app;
};
