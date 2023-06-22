const {sequelize,Movie} = require("../models")
const asyncHandler = require('express-async-handler')
const {validationResult} = require('express-validator')

// @desc get all movies 
//  route get /api/movie
// access public
const getMoviesSearch = asyncHandler(async(req,res)=>{
   const movies = await Movie.findAll({
    where:{
        title:req.query.title
    }
   });
   return res.json(movies)
})

const getMovies = asyncHandler(async(req,res)=>{
    
    const movies = await Movie.findAll()
    return res.json({movie:movies})
})

const getMoviesDetail=asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const movies = await Movie.findAll(
        {
            where:{uuid},
        }
    );
    return res.json({movies:movies});
})
// @desc get all movies 
//  route get /api/movie
// access public

const createMovie = asyncHandler(async(req,res)=>{
    const error = validationResult(req)

    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
      }

    const {title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors} = req.body
    const movie = await Movie.create({title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors})
    return res.json({movie:movie})
})

const updateMovie = asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const {title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors} = req.body
    const movie = await Movie.findOne({where:{uuid:uuid}})
    movie.title=title
    movie.year=year
    movie.genre = genre
    movie.language = language
    movie.description =description
    movie.image = image
    movie.poster_image = poster_image
    movie.trailer_url = trailer_url
    movie.length_of_video=length_of_video
    movie.file_link = file_link
    movie.subtitle_link = subtitle_link
    movie.actors = actors
    await movie.save()
    return res.json(movie)
})


const deleteMovie = asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid;
    const movie = await Movie.destroy({
        where:{
            uuid:uuid,
        }
    })
    return res.json({message:`${req.body.title} has been deleted`})
})

module.exports={getMovies,getMoviesDetail,getMoviesSearch,createMovie,updateMovie,deleteMovie}