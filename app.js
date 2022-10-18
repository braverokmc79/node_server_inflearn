const express = require('express');
const app = express();
const router = require("./router");


app.use(express.static("public")); //static 파일 등록 처리
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.use(router);

app.listen(3000, function () {
    console.log("start! express server on port 3000");
});
