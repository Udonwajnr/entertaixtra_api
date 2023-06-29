const {uploadFiles}= require('../helpers/upload.helper')

const util = require('util')

exports.uploadMultiple = (req, res) => {
    // req.files contains an array of file object
    res.json(req.file);
}
exports.uploadSingleV2 =async(req,res)=>{
    const uploadFile = util.promisify(uploadFiles)
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

