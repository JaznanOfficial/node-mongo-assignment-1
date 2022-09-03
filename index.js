const express = require('express')
const PORT = 5000;
const app = express()
const userRoute = require('./routes/usersRoute')

app.use('/', (req, res) => {
    res.send('<h1>This is node mongo assignment-1 server</h1>')
})
app.use('/user', userRoute)
app.all('*', (req, res) => {
    res.send('Oops, you are in wrong route. please go to right url')
})


app.listen(PORT, console.log('server is running on port', PORT))