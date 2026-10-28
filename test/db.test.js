const { Client } = require('pg');
jest.setTimeout(10000);
const dbTest = process.env.DATABASE_URL ? test : test.skip;
dbTest('PostgreSQL принимает подключения и отвечает на SELECT 1', async () => {
const client = new Client({ connectionString: process.env.DATABASE_URL });
await client.connect();
try {
const result = await client.query('SELECT 1 AS value');
expect(result.rows[0].value).toBe(1);
} finally {
await client.end();
}
});
