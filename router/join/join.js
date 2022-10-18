const express = require('express');
const passport = require('passport');
const router = express.Router();
const path = require("path");
const db = require("../../lib/db");
const LocalStrategy = require('passport-local').Strategy;

router.get("/", function (req, res) {
    console.log("join page  ...");
    res.render("join.ejs");
});


passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function verify(req, email, password, done) {
    console.log('local-join callback called');
    console.log(email, password, done);
}
));

// 로그인 처리 - 1) 성공 및 실패 페이지 설정 및 flash 사용여부 설정하기
router.post('/', passport.authenticate('local', {
    successRedirect: '/passport/welcome',
    failureRedirect: '/passport/login',
    failureFlash: true,
    successFlash: true
}));



// router.post("/", function (req, res) {
//     const name = req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;

//     db.query("INSERT INTO users(name, email, password) VALUES (?, ? ,? )", [name, email, password], function (err, rows) {
//         if (err) throw err;
//         else res.render("welcome.ejs", { id: rows.insertId, name: name });
//     });

// });





module.exports = router;