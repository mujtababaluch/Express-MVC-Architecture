const mongoose = require('mongoose')

const userschema =  mongoose.Schema({
    name : {type :String , required : true},
    username : {type :String , unique :true, required : true},
    password : {type :String , required : true},

})

module.exports =  mongoose.model("Userrs",userschema)