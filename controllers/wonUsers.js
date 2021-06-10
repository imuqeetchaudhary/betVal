const { UserBetslip } = require("../db/models/userBetslip")
const { MatchResult } = require("../db/models/matchResult")

exports.getWonUsers = async (req, res) => {
    try {
        const matchResult = await MatchResult.findOne({ matchId: req.body.matchId })
        if (!matchResult) return res.status(404).json({
            message: "No match result found"
        })

        const userBetslip = await UserBetslip.findOne({ matchId: req.body.matchId, userId: req.user._id })
        if (!userBetslip) return res.status(404).json({
            message: "No user betslip found for this match"
        })

        // 

        const BetReturn = async () => {
            const newBetslip = await UserBetslip.updateOne(
                { matchId: req.body.matchId },
                {
                    $set: {
                        isBetWon: true,
                        betReturn: userBetslip.stake * userBetslip.totalOdds
                    }
                })

            res.status(200).json({
                message: "You won the bet",
                betReturn: userBetslip.stake * userBetslip.totalOdds
            })
        }

        if (matchResult.isHomeTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === true && userBetslip.homeOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isHomeTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === false && userBetslip.homeOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }
        if (matchResult.isHomeTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === true && userBetslip.homeOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isHomeTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === false && userBetslip.homeOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }

        // 

        if (matchResult.isAwayTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === true && userBetslip.awayOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isAwayTeamWon == true && matchResult.isBtts == true && matchResult.isOver25 === false && userBetslip.awayOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }
        if (matchResult.isAwayTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === true && userBetslip.awayOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isAwayTeamWon == true && matchResult.isBtts == false && matchResult.isOver25 === false && userBetslip.awayOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }

        // 

        if (matchResult.isDraw == true && matchResult.isBtts == true && matchResult.isOver25 === true && userBetslip.drawOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isDraw == true && matchResult.isBtts == true && matchResult.isOver25 === false && userBetslip.drawOdd > 0 && userBetslip.bttsYes > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }
        if (matchResult.isDraw == true && matchResult.isBtts == false && matchResult.isOver25 === true && userBetslip.drawOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.over25 > 0) {
            return BetReturn()
        }
        if (matchResult.isDraw == true && matchResult.isBtts == false && matchResult.isOver25 === false && userBetslip.drawOdd > 0 && userBetslip.bttsNo > 0 && userBetslip.under25 > 0) {
            return BetReturn()
        }

        else {
            res.status(200).json({
                message: "You lost the bet",
                betReturn: 0.00
            })
        }

    }
    catch (err) {
        res.status(400).json({
            message: `${err}`
        })
    }
}