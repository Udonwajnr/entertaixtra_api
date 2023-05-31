const express = require('express')
const router = express.Router()
const {getSeasonal, createSeasonal,deleteSeasonal,updateSeasonal,getSeasonalDetail} = require('../controllers/seasonalController')

router.route("/").get(getSeasonal)
router.route("/:uuid").get(getSeasonalDetail)
router.route("/").post(createSeasonal)
router.route("/:uuid").put(updateSeasonal)
router.route("/:uuid").delete(deleteSeasonal)

module.exports = router