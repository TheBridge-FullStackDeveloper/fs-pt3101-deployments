const { sql } = require("slonik");

const selectUsers = (db) => async () => {
  try {
    const users = await db.query(sql`
      SELECT email, name FROM users;
    `);

    return {
      ok: true,
      data: users.rows,
    };
  } catch (error) {
    console.error("> selectUsers: ", error.message);

    return {
      ok: false,
    };
  }
};

module.exports = {
  selectUsers,
};
