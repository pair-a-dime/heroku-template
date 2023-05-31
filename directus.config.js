// Heroku to Directus mappings
module.exports = {
  ADMIN_EMAIL: process.env.ADMIN_EMAIL,
  ADMIN_PASSWORD: process.env.ADMIN_PASSWORD,
  KEY: process.env.KEY,
  SECRET: process.env.SECRET,
  PORT: process.env.PORT,
  DB_CLIENT: process.env.DB_CLIENT,
  DB_CONNECTION_STRING: process.env.DATABASE_URL,
  CORS_ENABLED: process.env.CORS_ENABLED,
  CORS_ORIGIN: process.env.CORS_ORIGIN,
  NODE_ENV: process.env.NODE_ENV,
  EXTENSIONS_PATH: "extensions",
  STORAGE_LOCAL_ROOT: "uploads",
};
