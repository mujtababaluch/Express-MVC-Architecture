const express = require("express");
const router = express.Router();

const users =  require("./users_routes")
router.use("/user",users)



module.exports = router;