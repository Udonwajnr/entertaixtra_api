const express = require("express")
const { uploadSingleV2 } = require("../controllers/uploadMovieController")
const router = express.Router()

router.post('',uploadSingleV2)

module.exports = router