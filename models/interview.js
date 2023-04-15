const mongoose=require('mongoose');
const interviewSchema=new mongoose.Schema({
    companyname:{
       type:String,
       required:true,
    },
    date:{
        type:String,
       required:true,
    },
});

const interview=mongoose.model('interview',interviewSchema);
module.exports=interview;