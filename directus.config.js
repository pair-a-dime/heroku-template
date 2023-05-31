// Heroku to Directus mappings
module.exports = {
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT,
  PUBLIC_URL: process.env.PUBLIC_URL,
  DB_CLIENT: process.env.DB_CLIENT,
  DB_CONNECTION_STRING: process.env.DATABASE_URL
};
