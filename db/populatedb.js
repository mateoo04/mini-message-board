const { Client } = require('pg');

const environment = process.env.NODE_ENV || 'development';
const databaseUrl =
  environment === 'production'
    ? process.env.PRODUCTION_DATABASE_URL
    : process.env.DEVELOPMENT_DATABASE_URL;

const SQL = `CREATE TABLE IF NOT EXISTS messages(
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text TEXT,
    username VARCHAR(255),
    date TIMESTAMP DEFAULT NOW()
    );`;

async function main() {
  console.log('Seeding...');
  const client = new Client({ connectionString: databaseUrl });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log('done');
}

main();
