const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'node_inflearn',
    password: '1111',
    database: 'node_inflearn'
});
db.connect();


router.post("/form", function (req, res) {
    console.log("req.body : ", req.body.email);
    //res.send(`<h1>welcome! ${req.body.email}</h1>`);
    res.render('email.ejs', { 'email': req.body.email })
});

router.post("/ajax", function (req, res) {
    console.log("ajax email - req.body : ", req.body.email);
    //check validation about input value => select db

    db.query("select name from users where email =?", [req.body.email], function (err, rows) {
        if (err) return res.status(400).json({ err: err });
        if (rows[0]) return res.status(200).json({ result: "ok", name: rows[0].name })
        else return res.status(200).json({ result: "none", name: "" })
    });
});

module.exports = router;