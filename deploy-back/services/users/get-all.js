const { selectUsers } = require("../../queries");

module.exports = (db) => async (req, res, next) => {
  const queryResult = await selectUsers(db)();

  if (!queryResult.ok) {
    res.status(500).json({
      success: false,
      message: "something went wrong!",
    });
  }

  res.status(200).json({
    success: true,
    data: queryResult.data,
  });
};
