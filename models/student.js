const mongoose=require('mongoose');
const studentSchema=new mongoose.Schema({
    name:{
       type:String,
       required:true,
    },
    email:{
        type:String,
       required:true,
    },
    college:{
        type:String,
        required:true,
    },
    dsa:{
        type:String,
        required:true,
    },
    web:{
        type:String,
        required:true,
    },
    react:{
        type:String,
        required:true,
    },
    status:{
        type:String,
        required:true,
    },
    interviews:[
       
    ]
});

const student=mongoose.model('student',studentSchema);
module.exports=student;