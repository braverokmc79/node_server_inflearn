const express = require('express');
const router = express.Router();
const path = require('path');
const mainRouter = require("./main/main");
const emailRouter = require("./email/email");
let joinRouter = null;
let loginRouter = null;
const logoutRouter = require("./logout/logout");
const movieRouter = require("./movie/movie");
const parseurl = require('parseurl');


router.get("/", function (req, res) {
    console.log("index");
    // res.sendFile(path.join(__dirname, "../public/main.html"));
    res.render("main.ejs", { user: req.user });
});


router.use(function (req, res, next) {
    const pathname = parseurl(req).pathname;
    console.log("현재 경로 :", pathname);

    if (pathname && pathname === "/login") {
        loginRouter = require("./login/login");
        router.use("/login", loginRouter);
    }

    if (pathname && pathname === "/join") {
        joinRouter = require("./join/join")
        router.use("/join", joinRouter);
    }
    next();
})



router.use("/main", mainRouter);
router.use("/email", emailRouter);
router.use("/logout", logoutRouter);
router.use("/movie", movieRouter);


module.exports = router;


