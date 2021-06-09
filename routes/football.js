const express = require("express")
const router = express.Router()
const football = require("../controllers/football")
const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: "./upload/xlsxFiles",
    filename: (req, file, fileName) => {
        return fileName(null, `sheet${path.extname(file.originalname)}`)
    }
})

const upload = multer({
    storage: storage
})

router.get("/matches", football.getMatches)
router.post("/upload", upload.single("file"), football.upload)

module.exports = router