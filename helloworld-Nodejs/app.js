const express = require("express");
const ejs = require("ejs");

const server = express();

server.use("/assets/css", express.static(__dirname + "/assets/css"));
server.use("/assets/img", express.static(__dirname + "/assets/img"));
server.use("/assets/js", express.static(__dirname + "/assets/js"));
server.set("view engine","ejs");

server.get("/", (req, res) => {
  res.render("index");
});

const port = process.env.port || 3000
server.listen(port, () => {
    console.log("Server running at port " + port);
});