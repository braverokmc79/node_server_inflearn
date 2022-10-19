const express = require('express');
const router = express.Router();


//로그 아웃 처리
router.get('/', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        req.session.destroy(function (err) {
            res.redirect("/");
        });
    });
});


module.exports = router;