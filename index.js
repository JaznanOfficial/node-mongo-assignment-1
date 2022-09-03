const { json } = require("express");
const express = require("express");
const PORT = 5000 || "https://node-mongo-assignment-1.vercel.app/";
const app = express();
const fs = require("fs");
const http = require("http");
// const userRoute = require('./routes/usersRoute')
// const defaultRoute = require('./routes/defaultRoute')

// app.use('/', defaultRoute)
// app.use('/user', userRoute)
// app.all('*', (req, res) => {
// res.send('Oops, you are in wrong route. please go to right url')
// })

app.get("/user/all", (req, res) => {
    // console.log(req.url);
    if (req.url == "/user/all") {
        fs.readFile("userData.json", (err, data) => {
            try {
                // const buf = fs.readFileSync("userData.json");
                // const convertedData = buf.toString("utf8");

                // console.log(convertedData);
                res.write(data);
                res.end();
            }
            catch (err) {
                res.write(err);
                res.end();
            } 
        });
    }
});

app.get("/user/random", async (req, res) => {
    console.log(req.url);
    if (req.url == "/user/random") {
        fs.readFile("userData.json", (err, data) => {
            try {
                const buf = fs.readFileSync("userData.json").toString("utf8");
                // const decodedData = buf.toString("utf8");
                const convertedData = JSON.parse(buf);
                console.log(convertedData.length);
                const randomNumber = Math.floor(Math.random() * convertedData.length);
                console.log(randomNumber);
                // console.log(data);
                const randomData = convertedData[randomNumber];
                const stringifiedRandomData = JSON.stringify(randomData);
                console.log(stringifiedRandomData);
                res.write(stringifiedRandomData);
                res.end();
            }
            catch (err){
                res.write(err);
                res.end();
            }
        });
    }
});

app.listen(PORT, console.log("server is running on port", PORT));
