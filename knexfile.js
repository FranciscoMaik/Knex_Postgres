// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      database: "d55qs1ublcfftc",
      user: "eslumfvmshtwgk",
      password:
        "f6680374703bc586ffd4a312452c80ed5a59b60fd28c7521766bb4883544d513",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
  onUpdateTrigger: (table) => `
  CREATE TRIGGER ${table}_updated_at
  BEFORE UPDATE ON ${table}
  FOR EACH ROW
  EXECUTE PROCEDURE on_update_timestamp();
  `,

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: __dirname + "/src/database/migrations",
    },
    seeds: {
      directory: __dirname + "/src/database/seeds",
    },
  },
};
