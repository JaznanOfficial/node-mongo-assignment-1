const express = require('express');
const router = express.Router();


router.route('/').get((req, res) => {
    res.send('<h1>This is node mongo assignment-1 server</h1>')
})

module.exports = router;