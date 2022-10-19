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
    res.render("login.ejs", { 'message': msg });
});


passport.serializeUser(function (user, cb) {
    process.nextTick(function () {
        console.log("로그인 처리시 최초 한번만 실행 passport.serializeUser  :", user);
        cb(null, { id: user.id, email: user.email, name: user.name });
    });
});

// 로그인 성공되면 passport.deserializeUser  매번 실행 처리된다
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

    console.log("로그인 처리 파라미터 ", req.body);

    db.query("SELECT * FROM users WHERE email=? and password=?", [email, password], function (err, rows) {
        if (err) return done(null, false, { message: err.toString() });

        if (rows.length) {
            console.log("로그인 성공 처리 : ", rows[0]);
            return done(null, { "id": rows[0].id, "email": rows[0].email, "name": rows[0].name });

        } else {
            return done(null, false, { "message": "your login info is not found >.<" })
        }
    });
}

));



// ajax 로그인 처리
router.post('/', function (req, res, next) {

    passport.authenticate('local', function (err, user, info) {
        if (err) res.status(500).json(err);
        if (!user) return res.status(401).json(info.message);

        console.log("1.ajax 로그인 처리 :", user, info);

        req.logIn(user, function (err) {
            if (err) return next(err);
            return res.json(user);
        })

    })(req, res.next);


});



module.exports = router;