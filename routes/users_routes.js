const express = require('express')
const router = express.Router()

const UserController = require("../controllers/users_controllers")

router.all("/add-user",UserController.registeruser)




module.exports = router;