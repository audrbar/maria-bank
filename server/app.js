const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mysql = require('mysql');
const { v4: uuidv4 } = require('uuid');
const md5 = require('md5');

const app = express();
const port = 3003;
app.use(express.json({ limit: '10mb' }));
app.use(express.static('public'));

const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db2'
});

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));

app.use(cookieParser());

app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(express.json());

// Login Login Login Login Login Login Login Login Login Login
app.post('/login', (req, res) => {
    const sessionId = uuidv4();
    const sql = `
        UPDATE users
        SET session = ?
        WHERE name = ? AND psw = ?
    `;
    con.query(sql, [sessionId, req.body.name, md5(req.body.psw)], (err, result) => {
        if (err) throw err;
        if (result.affectedRows) {
            res.cookie('kijaSession', sessionId);
            res.json({
                status: 'ok',
                name: req.body.name
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});

app.post('/logout', (req, res) => {
    res.clearCookie('kijaSession');
    res.json({
        status: 'logout',
    });
});

app.get('/login', (req, res) => {
    const sql = `
        SELECT name
        FROM users
        WHERE session = ?
    `;
    con.query(sql, [req.cookies.kijaSession || ''], (err, result) => {
        if (err) throw err;
        if (result.length) {
            res.json({
                status: 'ok',
                name: result[0].name,
            });
        } else {
            res.json({
                status: 'error',
            });
        }
    });
});

// API API API API API API API API API API API API API API API API API API
// SELECT column1, column2, ...
// FROM table_name;


app.get('/accounts', (req, res) => {
    const sql = `
        SELECT id, firstname, surname, amount, image
        FROM accounts
        ORDER BY surname
    `;
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result);
    });
});

// INSERT INTO table_name (column1, column2, column3, ...)
// VALUES (value1, value2, value3, ...);

app.post('/accounts', (req, res) => {
    const sql = `
        INSERT INTO accounts ( firstname, surname, amount)
        VALUES (?, ?, ?)
    `;
    con.query(sql, [req.body.firstname, req.body.surname, req.body.amount], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'New account is created', 'type': 'success' }
        });
    });
});

// DELETE FROM table_name WHERE condition

app.delete('/accounts/:id', (req, res) => {

    const sql = `
        DELETE FROM accounts
        WHERE id = ?
    `;
    con.query(sql, [req.params.id], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'The account can not be deleted. Just spend all your money.', 'type': 'danger' }
        });
    });
});

// UPDATE table_name
// SET column1 = value1, column2 = value2, ...
// WHERE condition;

app.put('/accounts/:action/:id', (req, res) => {
    if (req.params.action === 'add') {

    } else if (req.params.action === 'rem') {

    }
    const sql = `
        UPDATE accounts
        SET amount = ?
        WHERE id = ?
    `;

    con.query(sql, [req.body.amount, req.params.id], (err) => {
        if (err) throw err;
        res.json({
            message: { text: 'Everything is OK! The account has been debited.', 'type': 'info' }
        });
    });
});

app.listen(port, () => {
    console.log(`LN is on port number: ${port}`);
});