var express = require('express');
var multer = require('multer')
var path = require('path')
var silly = require('silly-datetime')
var mkdirp = require('mkdirp');
const {
  dirname
} = require('path');
// var mu = multer({dest:'public/uploads'})
var storage = multer.diskStorage({
  destination: async function (req, file, cb) {
    let day = silly.format(new Date(), "YYYYMMDD")
    let dirpath = path.join('../public/uploads', day)
    await mkdirp(dirpath)
    cb(null, dirpath)
  },
  filename: function (req, file, cb) {
    // let extname = path.extname(file.originalname)
    cb(null, file.originalname)
  }
})

var upload = multer({
  storage: storage
})
var router = express.Router();
/* GET home page. */
router.get('/form', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
//单文件上传
router.post('/postFile', upload.single("pic"), function (req, res, next) {
  console.log(req.body)
  console.log(req.file)
  console.log(req.files)
  res.send("post")
});

//多文件上传
// router.post('/postFile', upload.array("pic"), function (req, res, next) {
//   console.log(req.body)
//   console.log(req.file)
//   console.log(req.files)
//   res.send("post")
// });
module.exports = router;