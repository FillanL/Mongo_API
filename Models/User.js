const mongoose = require('mongoose')
const userSchema = mongoose.Schema({
    userName:{
        type: String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    active: {
        type:Boolean,
        default: true
    }
})

module.exports = mongoose.model('Users', userSchema)
