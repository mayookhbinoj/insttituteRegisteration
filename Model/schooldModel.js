const mongoose =require("mongoose")
const { type } = require("os")

const schooleSchema=new mongoose.Schema({
    educationboard:{
        type:String,
        required:true
    },
    medium:{
        type:String,
        required:true
    },
    ClassCategory:{
        type:Array
    }
})

module.exports=mongoose.model("School",schooleSchema)