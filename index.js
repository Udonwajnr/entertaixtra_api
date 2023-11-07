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

// movie router
app.use('/api/movies',require("./routes/movieRoute"))
// episode router
app.use('/api/episodes', require("./routes/episodeRoute"))
// seasonal Router
app.use('/api/seasonal', require("./routes/seasonalRoute"))
// user router
app.use('/api/users',require('./routes/userRoute'))
// upload image Router
app.use("/api/uploadimage",require('./routes/uploadRoute'))
// upload Movie router
app.use("/api/uploadmovie",require('./routes/uploadMovieRoute'))
//upload subtitle router
app.use("/api/uploadsubtitle",require('./routes/uploadSubtitle'))

// contact router
app.use("/api/contact", require('./routes/contactRoute'))

app.listen(port,async()=>{
    console.log(`app is listening on port ${port}`)
    // during production come and change it abeg
    // for changes use  
    await sequelize.sync({alter:true})

    // or
  
    // await sequelize.sync({force:true})


    // for development
    // after getting data
    // await sequelize.authenticate()
})