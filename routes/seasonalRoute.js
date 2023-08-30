const express = require('express')
const router = express.Router()
const {getSeasonal, createSeasonal,deleteSeasonal,updateSeasonal,getSeasonalDetail} = require('../controllers/seasonalController')
const {check} = require('express-validator')
router.route("/").get(getSeasonal)
router.route("/:uuid").get(getSeasonalDetail)
router.route("/").post(
    [
        check('title').notEmpty().withMessage("title cannot be empty"),
        check('year').notEmpty().withMessage("year cannot be empty"),
        check('genre').notEmpty().withMessage("genre cannot be empty"),
        check('language').notEmpty().withMessage("language cannot be empty"),
        check('description').notEmpty().withMessage("description cannot be empty"),
        check('image').notEmpty().withMessage("image cannot be empty").isURL().withMessage("Image must be a url").trim(),
        check('poster_image').notEmpty().withMessage("poster cannot be empty").isURL().withMessage("poster must be a url").trim(),
        check('trailer_url').notEmpty().withMessage("trailer url cannot be empty").isURL().withMessage("trailer url must be a url").trim(),
        check('number_of_episodes').notEmpty().withMessage("number of episodes url cannot be empty"),
        check('actors').notEmpty().withMessage("actors cannot be empty").trim(),
     ],
     createSeasonal
)
router.route("/:uuid").put(updateSeasonal)
router.route("/:uuid").delete(deleteSeasonal)

module.exports = router