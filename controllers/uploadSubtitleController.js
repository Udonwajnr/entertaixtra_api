const {uploadSubtitle} = require("../helpers/subtitleUpload.helper")
const util = require('util')


exports.uploadSingleV2 =async(req,res)=>{
    const uploadFile = util.promisify(uploadSubtitle)
    try{
        await uploadFile(req,res);
        res.json(req.file)
        console.log(req.file)
        console.log("done")
    }
    catch(error){
        console.log(error)
        return res.status(500).json(error)
    }
}
