const { PORT } = require("./environments");
const app = require("./app");

const main = async () => {
  (await app()).listen(PORT, () =>
    console.info(
      `> listening at ${PORT} | environment: ${process.env.NODE_ENV}`
    )
  );
};

main();
