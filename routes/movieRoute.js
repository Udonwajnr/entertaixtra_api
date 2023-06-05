const express = require('express')
const router = express.Router()
const {getMovies,getMoviesDetail,createMovie,updateMovie,deleteMovie} = require("../controllers/moviesController")

router.route("/").get(getMovies)
router.route("/:uuid").get(getMoviesDetail)
router.route("/").post(createMovie)
router.route("/:uuid").put(updateMovie)
router.route("/:uuid").delete(deleteMovie)

module.exports = router