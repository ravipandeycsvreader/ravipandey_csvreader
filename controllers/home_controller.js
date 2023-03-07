const file_Controller = require('./file_controller');

const uploadedFileNames = file_Controller.uploadedFileNames;
const array = uploadedFileNames();   //containing csv filenames

module.exports.home = function(req,res){
    return res.render('home',{
        files: array
    });
}
