const express = require('express');
const router = express.Router();

const fileController = require('../controllers/file_controller');

router.post('/upload',fileController.upload);   //Creating route to upload new file
router.get('/open',fileController.open);        //Creating route to open already uploaded file
router.get('/delete',fileController.delete);    //Creating route to delete a particular file

module.exports = router;