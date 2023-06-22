const express = require("express")
const {User} = require('../models')
const asyncHandler = require('express-async-handler')

const saveUser = asyncHandler(async(req,res,next)=>{
    const username = await User.findOne({
        where: {
          username: req.body.username,
        },
      });
      //if username exist in the database respond with a status of 409
      if (username) {
        return res.json(409).send("username already taken");
      }
   
      //checking if email already exist
      const emailcheck = await User.findOne({
        where: {
          email: req.body.email,
        },
      });
      //if email exist in the database respond with a status of 409
      if (emailcheck) {
        return res.json(409).send("Authentication failed");
      }
   
      next();
})

module.exports={saveUser,}