const express = require('express');
const { Pool } = require('pg');
const { formatPrice } = require('./format');
const app = express();
const pool = new Pool({
connectionString: process.env.DATABASE_URL,
});
app.get('/health', async (_req, res) => {
try {
await pool.query('SELECT 1');
res.json({ status: 'ok' });
} catch (error) {
console.error('Database health check failed:', error.message);
res.status(503).json({ status: 'error' });
}
});
app.get('/price/:value', (req, res) => {
const value = Number(req.params.value);
if (Number.isNaN(value)) {
return res.status(400).json({ error: 'Value must be a number' });
}
return res.json({ formatted: formatPrice(value) });
});
const port = Number(process.env.PORT) || 3000;
if (require.main === module) {
app.listen(port, () => {
console.log(`Server is running on http://localhost:${port}`);
});
}
module.exports = app;
