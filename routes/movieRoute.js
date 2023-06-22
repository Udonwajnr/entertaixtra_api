const express = require('express')
const router = express.Router()
const {getMovies,getMoviesDetail,getMoviesSearch,createMovie,updateMovie,deleteMovie} = require("../controllers/moviesController")
const {check} = require('express-validator')
router.route("/").get(getMovies)
router.route("/search").get(getMoviesSearch)
router.route("/:uuid").get(getMoviesDetail)
router.route("/").post(
    [
        check('title').notEmpty().withMessage("title cannot be empty"),
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
    createMovie,
)
router.route("/:uuid").put(updateMovie)
router.route("/:uuid").delete(deleteMovie)
module.exports = router