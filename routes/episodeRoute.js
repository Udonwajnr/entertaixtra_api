const express = require("express")
const router = express.Router()
const {getEpisode,getEpisodeDetails,createEpisode,updateEpisode,deleteEpisode,} = require('../controllers/episodeController')
const {check} = require('express-validator')


router.route("/").get(getEpisode)
router.route("/:uuid").get(getEpisodeDetails)
router.route("/").post(
    [
        check('title').notEmpty().withMessage("Title cannot be empty"),
        check('seasonalUuid').notEmpty().withMessage("Seasonal UUid cannot be empty"),
        check('year').notEmpty().withMessage("Year cannot be empty"),
        check('genre').notEmpty().withMessage("Genre cannot be empty"),
        check('language').notEmpty().withMessage("Language cannot be empty"),
        check('description').notEmpty().withMessage("Description cannot be empty"),
        check('length_of_video').notEmpty().withMessage("Length of video cannot be empty"),
        check('image').notEmpty().withMessage("Image cannot be empty").isURL().withMessage("Image must be a url").trim(),
        check('poster_image').notEmpty().withMessage("Poster cannot be empty").isURL().withMessage("poster must be a url").trim(),
        check('trailer_url').notEmpty().withMessage("Trailer url cannot be empty").isURL().withMessage("trailer url must be a url").trim(),
        check('file_link').notEmpty().withMessage("File link cannot be empty").isURL().withMessage("file link must be a url").trim(),
        check('subtitle_link').notEmpty().withMessage("Subtitle link cannot be empty").isURL().withMessage("subtitle link must be a url").trim(),
        check('actors').notEmpty().withMessage("Actors cannot be empty"),
        check('video_quality').notEmpty().withMessage("Video quality cannot be empty"),
    ],
    createEpisode
)
router.route("/:uuid").put(updateEpisode)
router.route("/:uuid").delete(deleteEpisode)

module.exports=router