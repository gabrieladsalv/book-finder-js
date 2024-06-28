// server.js
const express = require('express');
const sql = require('mssql');
const dbConfig = require('./dbConfig');

const app = express();
app.use(express.json());

sql.connect(dbConfig).then(pool => {
    if (pool.connecting) {
        console.log('Connecting to the database...');
    }
    if (pool.connected) {
        console.log('Connected to the database.');
    }
}).catch(err => {
    console.error('Database connection failed:', err);
});

app.get('/books', async (req, res) => {
    try {
        const pool = await sql.connect(dbConfig);
        const result = await pool.request().query('SELECT * FROM Books');
        res.json(result.recordset);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.post('/books', async (req, res) => {
    const { title, author, genre, publishedYear } = req.body;
    try {
        const pool = await sql.connect(dbConfig);
        await pool.request()
            .input('title', sql.NVarChar, title)
            .input('author', sql.NVarChar, author)
            .input('genre', sql.NVarChar, genre)
            .input('publishedYear', sql.Int, publishedYear)
            .query('INSERT INTO Books (title, author, genre, publishedYear) VALUES (@title, @author, @genre, @publishedYear)');
        res.status(201).send('Book added successfully');
    } catch (err) {
        res.status(500).send(err.message);
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
