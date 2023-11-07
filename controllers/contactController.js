const asyncHandler =  require("express-async-handler")
const {sequelize,Contact} = require("../models")
const {validationResult} = require("express-validator")
const nodemailer = require("nodemailer")


const getContact = asyncHandler(async(req,res)=>{
    const contact = await Contact.findAll()
    return res.json({contact:contact})
})

const sendEmail =asyncHandler(async(req,res)=>{
    const error = validationResult(req)
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const {name,email,subject,message} = req.body
    const contact = await Contact.create({name,email,subject,message})
   
    let config = {
        service: 'gmail', // your email domain
        host:"smtp",
        port:587,
        secure:false,
        auth: {
            user: process.env.NODEJS_GMAIL_APP_USER, // your email address
            pass: process.env.NODEJS_GMAIL_APP_PASSWORD // your password
         }
      }
      let transporter = nodemailer.createTransport(config)

      let mail = {
        "from":email, // sender address
        "to": process.env.NODEJS_GMAIL_APP_USER, // list of receivers
        "subject":`name:${name} ,email:${email} ${subject}`, // Subject line
        "text":message,
    };

    transporter.sendMail(mail).then((info) => {
        console.log("sent")
    }).catch((error)=>{
      console.log(error)
    })
    return res.json({contact:contact})
})

module.exports = {getContact,sendEmail}