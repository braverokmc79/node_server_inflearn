const express = require('express');
const app = express();
app.listen(3000, function () {
    console.log("start! express server on port 3000");
});


app.get("/", function (req, res) {
    //res.send("<h1>h1 friend</h1>");
    res.sendFile(__dirname + "/public/main.html");
})
