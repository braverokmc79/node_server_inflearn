const express = require('express');
const app = express();
app.listen(3000, function () {
    console.log("start! express server on port 3000");
});

//static 파일 등록 처리
app.use(express.static("public"));


app.get("/", function (req, res) {
    console.log("test");
    //res.send("<h1>h1 friend</h1>");
    res.sendFile(__dirname + "/public/main.html");
})

app.get("/main", function (req, res) {
    res.sendFile(__dirname + "/public/main.html");
})