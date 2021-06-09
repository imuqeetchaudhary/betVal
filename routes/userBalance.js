const express = require("express")
const router = express.Router()
const userBalance = require("../controllers/userBalance")
const { validation } = require("../middlewares/validation")
const { userBalanceSchema } = require("../validation/userBalance")

router.get("/", userBalance.getBalance)
router.post("/add", validation(userBalanceSchema), userBalance.addBalance)

module.exports = router