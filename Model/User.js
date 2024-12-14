const mongoose=require("mongoose")

const userSchema=new mongoose.Schema({

    institute:{
        type:mongoose.Schema.ObjectId,
        refer:"instituteType"
    },
    schooleSchema:{
        type:mongoose.Schema.ObjectId,
        refer:"schooleSchema"
    }


})

module.exports=mongoose.model("User",userSchema)