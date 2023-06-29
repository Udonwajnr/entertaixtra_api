const multer = require("multer")
const multerS3 = require("multer-s3");
const path = require('path')
const s3 = require('../utils/s3.utills')


function sanitizeFile(file, cb) {
    // Define the allowed extension
    const fileExts = [".png", ".jpg", ".jpeg", ".gif"];

    // Check allowed extensions
    const isAllowedExt = fileExts.includes(
        path.extname(file.originalname.toLowerCase())
    );

    // Mime type must be an image
    const isAllowedMimeType = file.mimetype.startsWith("image/");

    if (isAllowedExt && isAllowedMimeType) {
        return cb(null, true); // no errors
    } else {
        // pass error msg to callback, which can be displaye in frontend
        cb("Error: File type not allowed!");
    }
}

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
fileFilter: (req, file, callback) => {
    sanitizeFile(file, callback)
},
limits:{
    fileSize:1024 * 1024 * 3
}
})

const uploadFiles = upload.single('file')

module.exports={uploadFiles}