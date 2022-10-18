const express = require('express');
//const bodyParser = require('body-parser')
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


app.get("/", function (req, res) {
    console.log("test");
    //res.send("<h1>h1 friend</h1>");
    res.sendFile(__dirname + "/public/main.html");
});

app.get("/main", function (req, res) {
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
    var responseData = { 'result': 'ok', 'email': req.body.email };
    res.status(200).json(responseData);
});


