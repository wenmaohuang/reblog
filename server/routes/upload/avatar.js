const express = require("express");
const path = require("path");
const multer = require("multer");

const userDB = require("../../db/user.js")

let router = express.Router();
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../public/img/upload/avatar"));

  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
let upload = multer({ storage }).single("file");



router.post("/", (req, res)=> {



  upload(req, res, function (err) {

      console.log(req.file, 2222);
    if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        res.send('multer err')
    } else if (err) {
        res.send('unknown err')
      // An unknown error occurred when uploading.
    }else{
        // res.sendStatus('is ok');
        console.log(req.session.login)
        if(!req.session.login){
            res.sendStatus(500)
            return
        }
        userDB.updateOne(
            {_id:req.session.login._id},
            {photo:'/img/upload/avatar/'+req.file.filename}
          
        ).then(data=>{
            req.session.login.photo = '/img/upload/avatar/'+req.file.filename
            console.log(data)
            console.log(req.session.login.photo)
        })
    }


      

    // Everything went fine.

  });
});

module.exports = router;
