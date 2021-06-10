const express = require("express")
const bodyParser = require("body-parser")
const { connection } = require("./db/connection")
const user = require("./routes/user")
const football = require("./routes/football")
const userBalance = require("./routes/userBalance")
const userBetslip = require("./routes/userBetslip")

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use("/user", user)
app.use("/football", football)
app.use("/user-balance", userBalance)
app.use("/user-betslip", userBetslip)

const port = 4000
app.listen(port, () => {
    console.log(`Sever started at http://localhost:${port}`);
})