const express = require('express')
const dotenv = require('dotenv').config()
const {sequelize} = require('./models')
const cookieParser = require('cookie-parser')


const app=express()
const port = process.env.PORT || 3000
let cors= require('cors')
app.use(express.json())
app.use(cookieParser())
app.use(cors())

app.use('/api/movies',require("./routes/movieRoute"))
app.use('/api/episodes', require("./routes/episodeRoute"))
app.use('/api/seasonal', require("./routes/seasonalRoute"))
app.use('/api/users',require('./routes/userRoute'))
app.use("/api/uploadimage",require('./routes/uploadRoute'))
app.use("/api/uploadmovie",require('./routes/uploadMovieRoute'))
app.use("/api/uploadsubtitle",require('./routes/uploadSubtitle'))



app.listen(port,async()=>{
    console.log(`app is listening on port ${port}`)
    // during production come and change it abeg
    // for changes use  
    await sequelize.sync({alter:true})

    // or
  
    // await sequelize.sync(force:true)


    // for development
    // after getting data
    // await sequelize.authenticate()
})