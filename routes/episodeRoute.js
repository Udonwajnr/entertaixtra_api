const express = require("express")
const router = express.Router()
const {getEpisode,createEpisode,updateEpisode,deleteEpisode,} = require('../controllers/episodeController')

router.route("/").get(getEpisode)
router.route("/").post(createEpisode)
router.route("/:uuid").put(updateEpisode)
router.route("/:uuid").delete(deleteEpisode)

module.exports=router