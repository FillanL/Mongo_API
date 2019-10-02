const express = require('express');
const bodyPaser = require('body-parser');
const mongoose = require('mongoose');
const postRoute = require('./Routes/post')
const cors = require('cors')
require('dotenv/config');
const app = express();
app.use(bodyPaser.json())

app.use(cors())

app.use('/post', postRoute)
app.use('/user', postRoute)


app.get('/',(req,res)=>{
    res.send("im hereee fam")
})

//  connect to DB
mongoose.connect(
    process.env.mongoConnection,
    { useNewUrlParser: true },
    // { useUnifiedTopology: true }, 
    () => console.log("\x1b[35m","  Database is connected...") 
)

app.listen(3000)