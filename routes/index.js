const express = require('express');
const router = express.Router();

const home_Controller = require('../controllers/home_controller');

router.get('/',home_Controller.home);    //Creating route for homepage

router.use('/file',require('./file'));  //Creating route for all other routes related to files

module.exports = router;