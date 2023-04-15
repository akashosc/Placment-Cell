const User=require('../models/user');
const Student=require('../models/student');
const Interview=require('../models/interview');
const json2csv=require('json2csv').Parser;
// All the render sites
module.exports.login=async (req,res)=>{
    res.render('login');
}
module.exports.logout=async (req,res,next)=>{
    req.logout(function(err) {
        if (err) { return next(err); }
          res.redirect('/login');
      });
}
module.exports.signup=async (req,res)=>{
    res.render('sign_in');
}
module.exports.dasboard=async (req,res)=>{
    const student=await Student.find({});
    const interview=await Interview.find({});
    res.render('home',{
        student:student,
        interview:interview,
    });
}
module.exports.addstudent=async (req,res)=>{
    res.render('add_student');
}
module.exports.editstudent=async (req,res)=>{
    const id=req.params.id;
   const doc=await Student.findById(id);
    res.render('edit_student',{
        student:doc,
    });

}
module.exports.addinterview=async (req,res)=>{
    res.render('add_interview');
}
module.exports.editinterview=async (req,res)=>{
    try{
    const id=req.params.id;
    const doc=await Interview.findById(id);
     
   res.render('edit_interview',{
         name:doc.companyname,
         date:doc.date,
    }) }
    catch(err){
        console.error(err);
        return ;
    }
   
   
}
module.exports.deletestudent=async (req,res)=>{
    res.redirect('/dasboard');
}
module.exports.deleteinterview=async (req,res)=>{
    const id=req.params.id;
    const doc=await Interview.findByIdAndRemove(id);
    res.redirect('/dasboard');
}
module.exports.viewstudent=async (req,res)=>{
    const id=req.params.id;
    const doc=await Student.findById(id);

    res.render('view_student',{
        name:doc.name,
        student:doc.interviews,
    });
}
module.exports.docdow=async (req,res)=>{
   try{
      let userData=[];
      const student=await Student.find({});
      student.forEach((user)=>{
           user.interviews.forEach((uo)=>{
               const doc={
                  company:uo.name,
                  interviewDate:uo.date,
                  interviewResult:uo.status,
                  name:user.name,
                  email:user.email,
                  college:user.college,
                  dsa:user.dsa,
                  web:user.web,
                  react:user.react,
                  Student_status:user.status,
               }
              userData.push(doc);
           })
        
      });
      const csvFild=["Company","InterviewData","InterviewResult",'Name','Email','Collage',"Dsa Score","Web Score","React Score","Placed/Unplaced"];
      const csvParser= new json2csv({csvFild});
      const csvData=  csvParser.parse(userData); 
      res.setHeader('Content-Type', 'text/csv');
      res.setHeader( "Content-Disposition", "attachment:filename=userData.csv" );
      res.end(csvData);
   }catch(err){
      console.log(err);
       return res.redirect('/dasboard');
   }

}
// All the render sites


// All the post redirect
module.exports.paddstudent=async (req,res)=>{
    const doc=new Student({
        name:req.body.name,
        email:req.body.email,
        college:req.body.college,
        dsa:req.body.dsa,
        web:req.body.web,
        react:req.body.react,
        status:req.body.status,
    })
    doc.save();
    res.redirect('/dasboard');
}
module.exports.peditstudent=async (req,res)=>{
    const id=req.params.id;
    const doc=await Student.findByIdAndUpdate(id,{$set: req.body});
    res.redirect('/dasboard');
}
module.exports.paddinterview=async (req,res)=>{
    const doc=new Interview({
        companyname:req.body.companyname,
        date:req.body.date,
    });
   const k=await doc.save();
    res.redirect('/dasboard'); 
}
module.exports.peditinterview=async (req,res)=>{
    try{
        const doc=await Student.findOne({email:req.body.studentemail});

        doc.interviews.push({name:req.body.Company,date:req.body.date,status:req.body.status});
        doc.save();
        res.redirect('/dasboard');
    }catch(err){
          res.redirect('back');
    }
     
}
module.exports.plogin=async (req,res)=>{
    res.redirect('/dasboard');
}
module.exports.psignup=async (req,res)=>{
    const doc=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    })
    doc.save();
    res.redirect('/login');
}

// All the post redirect



