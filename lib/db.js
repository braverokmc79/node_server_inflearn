const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'node_inflearn',
    password: '1111',
    database: 'node_inflearn'
});
db.connect();

module.exports = db;