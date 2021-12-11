var express = require('express');
var router = express.Router();

router.route('/')
    .get((req, res) => {
        res.send("Hello World")
    })

module.exports = router;