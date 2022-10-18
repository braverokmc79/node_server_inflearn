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
    res.send(`<h1>welcome! ${req.body.email}</h1>`);
});


