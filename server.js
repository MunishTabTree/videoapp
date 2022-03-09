const express = require("express");
const app = express();
app.set('view engine', 'ejs')
app.use(express.static('public'));
const server = require("http").Server(app);
app.get("/", (req, res) => {
    // res.status(200).send("Hello World");
    const roomId = 'ajhflkdsjhfk'
    res.render('room', {roomId:roomId})
});
server.listen(3030);