const express = require('express');
const router = express.Router();
const path = require("path");
const db = require("../../lib/db");


router.get("/", function (req, res) {
    console.log("join page  ...");
    res.sendFile(path.join(__dirname, "../../public/join.html"));
});


module.exports = router;