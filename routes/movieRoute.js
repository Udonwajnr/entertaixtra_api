const express = require('express')
const router = express.Router()
const {getMovies,createMovie,updateMovie,deleteMovie} = require("../controllers/moviesController")

router.route("/").get(getMovies)
router.route("/").post(createMovie)
router.route("/:uuid").put(updateMovie)
router.route("/:uuid").delete(deleteMovie)

module.exports = router