const router = require("express").Router();

module.exports = (db) => {
  router.use("/users", require("./users")(db));

  return router;
};
