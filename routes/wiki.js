const express = require('express');
const router = express.Router();
//const main = require('../views/main');

router.get('/', (req, res, next) => {
    res.send('got to GET /wiki/');
    // try{
    // res.send(main(''));
    // } catch(e) {
    //     res.send(e);
    // }
})

router.post('/', (req, res, next) => {
    res.send('got to POST /wiki/');
})

router.get('/add', (req, res, next) => {
    res.send('got to GET /wiki/add');
})

module.export = router;