const { sql } = require("slonik");
const { randEmail, randFullName } = require("@ngneat/falso");

const create = async (db) => {
  await db.query(sql`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name TEXT,
      email TEXT UNIQUE
    );
  `);
};

const populate = async (db) => {
  await db.transaction(async (tx) => {
    for await (const _ of Array.from({ length: 10 })) {
      const user = { email: randEmail(), name: randFullName() };

      await tx.query(sql`
        INSERT INTO users (
          name, email
        ) VALUES (
          ${user.name}, ${user.email}
        );
      `);
    }
  });
};

const main = async () => {
  try {
    const db = await require("../configs/db");

    await create(db);
    console.info("> creation completed");

    await populate(db);
    console.info("> population completed");
  } catch (error) {
    console.info("> db error: ", error.message);
  }
};

main();
