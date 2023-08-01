const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/users");

//mount middleware - multer for file uploads for HTTP POST req
const multer = require("multer");
const upload = multer();

/*---------- Public Routes ----------*/
//http req routes -> /api/users/signup ... login ... etc

router.post("/signup",  usersCtrl.signup);
router.post("/login", usersCtrl.login);




/*---------- Protected Routes ----------*/

module.exports = router;





