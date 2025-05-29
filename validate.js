const JOI = require('joi')
const validateData=(req,res,next)=>{
    const taskData = JOI.object({
        title: JOI.string().min(3).required(),
        desc: JOI.string().min(3).required(),
    });
    const{ error }= taskData.validate(req.body,{abortEarly:true})

    if(error){
        console.log("validation error",error.details)
        return res.status(400).json({ message: error.details[0].message });
    }
    next();
}
module.exports = validateData;