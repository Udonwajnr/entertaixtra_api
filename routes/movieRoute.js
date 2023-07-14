const express = require('express')
const router = express.Router()
const {getMovies,getMoviesDetail,getMoviesSearch,createMovie,updateMovie,deleteMovie} = require("../controllers/moviesController")
const {check} = require('express-validator')
router.route("/").get(getMovies)
router.route("/search").get(getMoviesSearch)
router.route("/:uuid").get(getMoviesDetail)
router.route("/").post(
    [
        check('title').notEmpty().withMessage("Title cannot be empty"),
        check('year').notEmpty().withMessage("Year cannot be empty"),
        check('genre').notEmpty().withMessage("Genre cannot be empty"),
        check('language').notEmpty().withMessage("Language cannot be empty"),
        check('description').notEmpty().withMessage("Description cannot be empty"),
        check('length_of_video').notEmpty().withMessage("Length of video cannot be empty"),
        check('image').notEmpty().withMessage("Image cannot be empty").isURL().withMessage("Image must be a url"),
        check('poster_image').notEmpty().withMessage("Poster cannot be empty").isURL().withMessage("poster must be a url"),
        check('trailer_url').notEmpty().withMessage("Trailer url cannot be empty").isURL().withMessage("trailer url must be a url"),
        check('file_link').notEmpty().withMessage("File link cannot be empty").isURL().withMessage("file link must be a url"),
        check('subtitle_link').notEmpty().withMessage("Subtitle link cannot be empty").isURL().withMessage("subtitle link must be a url"),
        check('video_quality').notEmpty().withMessage("Video quality cannot be empty"),
        check('actors').notEmpty().withMessage("Actors cannot be empty"),
        ],   
    createMovie,
)
router.route("/:uuid").put(updateMovie)
router.route("/:uuid").delete(deleteMovie)
module.exports = router