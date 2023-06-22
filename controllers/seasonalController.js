const asyncHandler = require('express-async-handler')
const {sequelize,Seasonal,Episode} = require('../models')
const {validationResult} = require('express-validator')

const getSeasonal =asyncHandler(async(req,res)=>{
    const seasonal = await Seasonal.findAll(
        {
            include:[{model:Episode, as:"episode"}]
        }
    );
    return res.json({seasonal:seasonal});
})

const getSeasonalDetail=asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const seasonal = await Seasonal.findAll(
        {
            where:{uuid},
            include:[{model:Episode, as:"episode"}]
        }
    );
    return res.json({seasonal:seasonal});
})

const createSeasonal=asyncHandler(async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
   const {title,year,genre,language,description,image,poster_image,trailer_url,actors,number_of_episodes} = req.body;
   const seasonal = await Seasonal.create({title,year,genre,language,description,image,poster_image,trailer_url,actors,number_of_episodes});
   return res.json(seasonal); 
})

const updateSeasonal=asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid;
    const {title,year,genre,language,description,image,poster_image,trailer_url,actors,number_of_episodes} = req.body;
    const seasonal = await Seasonal.findOne({
        where:{uuid:uuid}
    })
    seasonal.title = title
    seasonal.year = year
    seasonal.genre = genre
    seasonal.language = language
    seasonal.description =description
    seasonal.image = image
    seasonal.poster_image = poster_image
    seasonal.trailer_url = trailer_url
    seasonal.number_of_episodes=number_of_episodes
    seasonal.actors = actors

    await seasonal.save()
    return res.json(seasonal);
})

const deleteSeasonal=asyncHandler(async(req,res)=>{
    const uuid = req.params.uuid
    const seasonal = await Seasonal.destroy({
        where:{uuid}
    })
    return res.json({message:`${req.body.title} has deleted`})
})

module.exports={getSeasonal,getSeasonalDetail,createSeasonal,updateSeasonal,deleteSeasonal}
