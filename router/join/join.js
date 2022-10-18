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


router.post("/", function (req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    db.query("INSERT INTO users(name, email, password) VALUES (?, ? ,? )", [name, email, password], function (err, rows) {
        if (err) throw err;
        else res.render("welcome.ejs", { id: rows.insertId, name: name });
    });

});

passport.use('local-join', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function (req, email, password, done) {
    console.log('local-join callback called');
}
));



module.exports = router;