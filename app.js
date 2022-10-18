const express = require('express');
//const bodyParser = require('body-parser')
const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'node_inflearn',
    password: '1111',
    database: 'node_inflearn'
});
db.connect();
//console.log("db 접속 :", db);
const mainRouter = require("./router/main");
const app = express();



app.listen(3000, function () {
    console.log("start! express server on port 3000");
});

//static 파일 등록 처리
app.use(express.static("public"));
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');



app.use("/main", mainRouter);


app.get("/", function (req, res) {
    console.log("test");
    //res.send("<h1>h1 friend</h1>");
    res.sendFile(__dirname + "/public/main.html");
});



app.post("/email_post", function (req, res) {
    console.log("req.body : ", req.body.email);
    //res.send(`<h1>welcome! ${req.body.email}</h1>`);
    res.render('email.ejs', { 'email': req.body.email })
});

app.post("/ajax_send_email", function (req, res) {
    console.log("ajax_send_email - req.body : ", req.body.email);
    //check validation about input value => select db

    db.query("select name from users where email =?", [req.body.email], function (err, rows) {
        if (err) return res.status(400).json({ err: err });
        if (rows[0]) return res.status(200).json({ result: "ok", name: rows[0].name })
        else return res.status(200).json({ result: "none", name: "" })
    });
});


