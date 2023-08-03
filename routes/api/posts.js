const express = require('express');
const router = express.Router();
const postsCtrl = require('../../controllers/posts');

//require multer for file uploads for HTTP POST req
const multer = require('multer');
const upload = multer();

//http routes -> /api/posts
//array of files -> upload.array('photo', 4)

router.post('/', upload.single('photo'), postsCtrl.create)
router.get('/', postsCtrl.index);


module.exports = router;