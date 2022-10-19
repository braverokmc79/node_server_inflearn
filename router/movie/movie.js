const express = require('express');
const router = express.Router();
const db = require("../../lib/db");

router.get("/list", function (req, res) {
    res.render("movie.ejs");
});

//1. /movie, GET
router.get("/", function (req, res) {

    db.query("select * from movie", [], function (err, rows) {
        if (err) return res.status(400).json({ err: err.toString() })
        console.log("rows : ", rows);
        res.status(200).json(rows);
    });

});


//2. /movie, POST
router.post("/", function (req, res) {
    const data = req.body;
    db.query("INSERT INTO movie (title, `type`, grade, actor) VALUES(?, ?, ?,?)",
        [data.title, data.type, data.grade, data.actor], function (err, rows) {

            if (err) return res.status(400).json({ err: err.toString() });
            res.status(200).json(rows);
        });

})



//3. /movie/:title", GET"
router.get("/:title", function (req, res) {
    console.log(" req body : ", req.params.title);

    db.query("select * from movie where   title =? ", [req.params.title], function (err, rows) {
        if (err) return res.status(400).json({ err: err.toString() })
        console.log("rows : ", rows[0]);
        res.status(200).json(rows[0]);
    });

});





module.exports = router;