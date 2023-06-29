const express = require('express')
const router = express.Router()
const upload = require("../helpers/upload.helper")
const {uploadSingleV2} = require('../controllers/uploadController')

router.post('',uploadSingleV2)


module.exports=router