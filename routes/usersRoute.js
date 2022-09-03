const express = require("express");
const router = express.Router();
// const fs = require("fs");
// const http = require("http");

const data = require("../userData.json");

// console.log(Math.floor(Math.random() * data.length));

router.route("/random").get((req, res) => {
    const randomNumber = Math.floor(Math.random() * data.length);
    const randomData = data[randomNumber];
    res.send(randomData);
    res.end();
});

module.exports = router;
