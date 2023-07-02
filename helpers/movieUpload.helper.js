const multer = require("multer")
const multerS3 = require("multer-s3");
const path = require('path')
const s3 = require('../utils/s3.utills')

const videoFilter = (req, file, cb) => {
    const fileExts = [".mp4",".avi",".mkv"]

    const isAllowedExt = fileExts.includes(path.extname(file.originalname.toLowerCase()))
    
    const isAllowedMimeType = file.mimetype.startsWith("video/");

    if(isAllowedExt && isAllowedMimeType){
        return cb(null,true)
    }else{
        cb("Error:File type is not allowed")
    }
};



const upload = multer({

    storage: multerS3({
        s3,
        bucket:"entertainxtra-bucket",
        acl:"public-read",
        // contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata:(req,file,cb)=>{
            cb(null,{fieldname:file.fieldname})
        },
        key:(req,file,cb)=>{
            const fileName = `${Date.now()}_${Math.round(Math.random() * 1E9)}`;
            cb(null, `${fileName}${path.extname(file.originalname)}`);
        }
    }),
    fileFilter: videoFilter,
    // limits:{
    //     fileSize:1024 * 1024 * 1024 *3
    // }
})
    
const uploadMovies = upload.single("movies")

module.exports= {uploadMovies}