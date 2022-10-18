const express = require('express');
const router = express.Router();
const path = require('path');
const mainRouter = require("./main/main");
const emailRouter = require("./email/email");


router.get("/", function (req, res) {
    console.log("index");
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

router.use("/main", mainRouter);
router.use("/email", emailRouter);

module.exports = router;


