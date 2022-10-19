const express = require("express");
const router = express.Router();
const path = require('path');


router.get("/", function (req, res) {
    console.log(" main js loaded    ");
    //res.sendFile(path.join(__dirname, "../../public/main.html"));
    console.log(" req.user  : ", req.user);
    res.render("main.ejs", { "user": req.user });
});

module.exports = router;