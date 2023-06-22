const asyncHandler = require("express-async-handler")
const {sequelize, Episode,Seasonal} = require('../models')
const {validationResult} =require('express-validator')

const getEpisode = asyncHandler(async(req,res)=>{
    const episodes = await Episode.findAll( {
        // where:{uuid},
        include:[{model:Seasonal,as:"seasonal"}]
    });
    return res.json({episodes:episodes})
} )

const getEpisodeDetails=asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const episode = await Episode.findAll(
        {
            where:{uuid},
            include:[{model:Seasonal,as:"seasonal"}]
        },
        
    )
    return res.json({episode:episode})
})

const createEpisode=asyncHandler(async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    const {seasonalUuid, title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors} = req.body
    const seasonal = await Seasonal.findOne({
        where:{uuid:seasonalUuid}
    }) 
    const episodes = await Episode.create({title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors,seasonalId:seasonal.id})
    return res.json(episodes)
})




const updateEpisode = asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const {title,year,genre,language,description,image,poster_image,trailer_url,length_of_video,file_link,subtitle_link,actors,seasonalId} = req.body
    const episode = await Episode.findOne({where:{uuid:uuid}})
    episode.seasonalId = seasonalId
    episode.title=title
    episode.year=year
    episode.genre = genre
    episode.language = language
    episode.description =description
    episode.image = image
    episode.poster_image = poster_image
    episode.trailer_url = trailer_url
    episode.length_of_video=length_of_video
    episode.file_link = file_link
    episode.subtitle_link = subtitle_link
    episode.actors = actors
    await episode.save()
    return res.json(episode);
})


const deleteEpisode = asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const episode = await Episode.destroy({
        where:{uuid}
    })  

    return res.json({message:`${req.body.title} has deleted`})
})  


module.exports={getEpisode,getEpisodeDetails,createEpisode,updateEpisode,deleteEpisode}