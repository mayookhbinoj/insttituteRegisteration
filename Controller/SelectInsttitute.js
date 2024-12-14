const instituteType=require("../Model/InstitutteModel")
const school=require("../Model/schooldModel")
const User = require("../Model/User")
const selectInstitute=async(req,res)=>{
    try {
        const institutes=await instituteType.find()
        if(institutes){ 
            res.json({institutes})    
        }
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Error fetching institues"})
    }
}

const instituteSelection=async(req,res)=>{
    try {
        const {institute}=req.params
        console.log(institute)
        if(institute=="school"){
            const findSchool=await school.find()
            console.log("enter",findSchool)
            res.send({institute:"school",findSchool})
        }
       

    } catch (error) {
        console.log(error)
    }
}

const selectPrimary=async(req,res)=>{
    try {
        const primary=req.params
        const {selectedClass}=primary
        if(selectedClass=="Highersecondary"){
            let classes=[8,9,10]
            res.json({sucess:"sucess Highersecondary",selectedClass,classes})
        }else if(selectedClass=="Pre-primary"){
            let classses=["LKG, HKG"]
            res.json({sucess:"sucess Pre-primary ",selectedClass,classses})
        }
        
    } catch (error) {
        console.log(error)
    }
}   
const register=async(req,res)=>{
    try {
       const saveData= new User({
          instituteType
       })

       await saveData.save()
    } catch (error) {
        console.log(error)
    }
}

module.exports={
    selectInstitute,
    instituteSelection,
    selectPrimary,
    register

}