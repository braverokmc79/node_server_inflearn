const express = require('express');
const app = express();


const mainRouter = require("./router/main");
const emailRouter = require("./router/email");



//static 파일 등록 처리
app.use(express.static("public"));

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


app.use("/main", mainRouter);
app.use("/email", emailRouter);


app.get("/", function (req, res) {
    console.log("test");
    //res.send("<h1>h1 friend</h1>");
    res.sendFile(__dirname + "/public/main.html");
});


app.listen(3000, function () {
    console.log("start! express server on port 3000");
});
