const express = require('express');
const router = express.Router();
const path = require('path');
const mainRouter = require("./main/main");
const emailRouter = require("./email/email");
const joinRouter = require("./join/join");
const loginRouter = require("./login/login");

router.get("/", function (req, res) {
    console.log("index");
    res.sendFile(path.join(__dirname, "../public/main.html"));
});

router.use("/main", mainRouter);
router.use("/email", emailRouter);
router.use("/join", joinRouter);
router.use("/login", loginRouter);


module.exports = router;


