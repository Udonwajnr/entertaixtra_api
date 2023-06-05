const express = require('express')
const dotenv = require('dotenv').config()
const {sequelize} = require('./models')
let cors= require('cors')

const app=express()
const port = process.env.PORT || 3000
app.use(express.json())
app.use(cors())
app.use('/api/movies',require("./routes/movieRoute"))
// try making it ('api/seasonalMovie/episode)
app.use('/api/episodes', require("./routes/episodeRoute"))
app.use('/api/seasonal', require("./routes/seasonalRoute"))

app.listen(port,async()=>{
    console.log(`app is listening on port ${port}`)
    // during production come and change it abeg
    // for changes use  
    // await sequelize.sync(alter:true)
  
    // or
  
    // await sequelize.sync(force:true)


    // for development
    // after getting data
    await sequelize.authenticate()
})