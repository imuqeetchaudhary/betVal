const express = require("express")
const router = express.Router()
const wonUsers = require("../controllers/wonUsers")
const { authentication } = require("../middlewares/isAuth")

router.get("/", authentication, wonUsers.getWonUsers)

module.exports = router