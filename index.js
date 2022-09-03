const { json } = require('express');
const express = require('express')
const PORT = 5000 || 'https://node-mongo-assignment-1.vercel.app/';
const app = express()
const fs = require('fs')
const http = require('http')
// const userRoute = require('./routes/usersRoute')
// const defaultRoute = require('./routes/defaultRoute')


// app.use('/', defaultRoute)
// app.use('/user', userRoute)
// app.all('*', (req, res) => {
    // res.send('Oops, you are in wrong route. please go to right url')
// })


app.get('/user/all',(req, res) => {
    // console.log(req.url);
    if (req.url == '/user/all') {
        fs.readFile('userData.json', (err, data) => {
            if (err) {
                res.write('failed to get data!!!')
                res.end()
            }
            else {
                res.write(data)
                res.end()
            }
        })
    }
})

app.listen(PORT, console.log('server is running on port', PORT))