const express = require("express")
const router = express.Router()
const {getEpisode,getEpisodeDetails,createEpisode,updateEpisode,deleteEpisode,} = require('../controllers/episodeController')
const {check} = require('express-validator')


router.route("/").get(getEpisode)
router.route("/:uuid").get(getEpisodeDetails)
router.route("/").post(
    [
        check('title').notEmpty().withMessage("title cannot be empty"),
        check('seasonalUuid').notEmpty().withMessage("seasonal UUid cannot be empty"),
        check('year').notEmpty().withMessage("year cannot be empty"),
        check('genre').notEmpty().withMessage("genre cannot be empty"),
        check('language').notEmpty().withMessage("language cannot be empty"),
        check('description').notEmpty().withMessage("description cannot be empty"),
        check('length_of_video').notEmpty().withMessage("length of video cannot be empty"),
        check('image').notEmpty().withMessage("image cannot be empty").isURL().withMessage("Image must be a url"),
        check('poster_image').notEmpty().withMessage("poster cannot be empty").isURL().withMessage("poster must be a url"),
        check('trailer_url').notEmpty().withMessage("trailer url cannot be empty").isURL().withMessage("trailer url must be a url"),
        check('file_link').notEmpty().withMessage("file link cannot be empty").isURL().withMessage("file link must be a url"),
        check('subtitle_link').notEmpty().withMessage("subtitle link cannot be empty").isURL().withMessage("subtitle link must be a url"),
        check('actors').notEmpty().withMessage("actors cannot be empty"),
    ],
    createEpisode
)
router.route("/:uuid").put(updateEpisode)
router.route("/:uuid").delete(deleteEpisode)

module.exports=router