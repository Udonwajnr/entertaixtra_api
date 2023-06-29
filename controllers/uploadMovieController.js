const {uploadMovies} = require("../helpers/movieUpload.helper")
const util = require('util')


exports.uploadSingleV2 =async(req,res)=>{
    const uploadMovie = util.promisify(uploadMovies)
    try{
        await uploadMovie(req,res);
        res.json(req.file)
        console.log(req.file)
        // console.log("done")
    }
    catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}
