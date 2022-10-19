const express = require('express');
const router = express.Router();
const db = require("../../lib/db");


router.get("/", function (req, res) {

    db.query("select * from movie", [], function (err, rows) {
        if (err) return res.status(400).json({ err: err.toString() })
        console.log("rows : ", rows);
        res.status(200).json(rows);
    });

});

router.get("/list", function (req, res) {
    res.render("movie.ejs");
});


module.exports = router;