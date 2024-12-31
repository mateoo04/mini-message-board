const { Pool } = require('pg');

const environment = process.env.NODE_ENV || 'development';
const databaseUrl =
  environment === 'production'
    ? process.env.PRODUCTION_DATABASE_URL
    : process.env.DEVELOPMENT_DATABASE_URL;

module.exports = new Pool({
  connectionString: databaseUrl,
  ssl: {
    rejectUnauthorized: false,
  },
});
