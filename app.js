const express = require('express');
const app = express();
const router = require("./router");
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash');

app.use(express.static("public")); //static 파일 등록 처리
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.use(session({
    secret: '1123@2312dajfj23rj2po4$#%@#',
    resave: false,
    saveUninitialized: false
}));


app.use(passport.initialize());//패스포트 초기화
app.use(passport.session());
app.use(flash());

app.use(router);




app.listen(3000, function () {
    console.log("start! express server on port 3000");
});
