const express = require('express');
const router = express.Router();
const path = require("path");
const db = require("../../lib/db");


router.get("/", function (req, res) {
    console.log("join page  ...");
    res.sendFile(path.join(__dirname, "../../public/join.html"));
});


router.post("/", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users(name, email, password) VALUES (?, ? ,? )", [name, email, password], function (err, rows) {
        if (err) { throw err; }
        console.log("ok db insert");
        res.json("ok");
    });

});


module.exports = router;