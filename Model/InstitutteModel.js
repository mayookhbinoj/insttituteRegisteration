const mongoose=require("mongoose")


const instituteSchema= new  mongoose.Schema({
    institute:{
        type:String,
        required:true
    }
    
})

module.exports=mongoose.model("instituteType",instituteSchema,)