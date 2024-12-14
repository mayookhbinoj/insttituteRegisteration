const express=require("express")
const app=express()
const mongoose=require("mongoose")
require("dotenv").config()
const  selectInstritute= require("./Controller/SelectInsttitute")

mongoose.connect(process.env.MONGODB_URI,{
}).then(()=>console.log("mongooose connnected"))
.catch((err)=>console.log("mongodb",err))

//routes
app.get("/institute",selectInstritute.selectInstitute)
app.get("/instituteSelecting/:institute",selectInstritute.instituteSelection)
app.get("/primarySelecting/:selectedClass",selectInstritute.selectPrimary)
app.post("/register",selectInstritute.register)




app.listen(3001,()=>{
    console.log("port is running")
})