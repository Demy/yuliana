const env = process.env;

interface DBConfig {
  host: String,
  port: String,
  user: String,
  password: String,
  database: String,
}

interface Config {
  db: DBConfig,
  listPerPage: Number
}

module.exports = {
  db: {
    host: env.DB_HOST,
    port: env.DB_PORT ? env.DB_PORT : undefined,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
  },
  listPerPage: 10,
};