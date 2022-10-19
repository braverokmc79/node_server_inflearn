const express = require('express');
const passport = require('passport');
const router = express.Router();
const path = require("path");
const db = require("../../lib/db");
const LocalStrategy = require('passport-local').Strategy;

router.get("/", function (req, res) {
    let msg = "";
    const errMsg = req.flash("error");
    if (errMsg) msg = errMsg;

    res.render("join.ejs", { 'message': msg });
});


passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        console.log("회원 가입 처리시 최초 한번만 실행 passport.serializeUser  :", user);
        cb(null, { id: user.id, email: user.email, name: user.name });
    });
});

// 회원가입이 성공되면 passport.deserializeUser  매번 실행 처리된다
passport.deserializeUser(function (user, cb) {
    process.nextTick(function () {
        console.log(" passport.deserializeUser  :", user);
        return cb(null, user);
    });
});


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function verify(req, email, password, done) {
    console.log("회원 가입 파라미터 ", req.body);

    db.query("SELECT * FROM users WHERE email=?", [email], function (err, rows) {
        if (err) return done(null, false, { message: err.toString() });

        if (rows.length) {
            console.log("existed email");
            return done(null, false, { message: "your email is already used" });

        } else {
            db.query("INSERT INTO users(name, email, password) VALUES (?, ? ,? )", [req.body.name, email, password], function (err, rows) {
                if (err) throw err;
                return done(null, { "id": rows.insertId, 'email': email, "name": req.body.name });
            });
        }


    });
}
));

// 회원가입 처리 - 성공 및 실패 페이지 설정 및 flash 사용여부 설정하기
router.post('/', passport.authenticate('local', {
    successRedirect: '/main',
    failureRedirect: '/join',
    failureFlash: true,
    successFlash: true
}));



module.exports = router;