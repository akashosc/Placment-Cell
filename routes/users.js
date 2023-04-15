const express=require('express')
const router=express.Router();
const homeController=require('../controllers/home_controller');
const passport = require('passport');


// all routes connection

// all the get connection
router.get('/logout',passport.isAuthonticate,homeController.logout);
router.get('/login',homeController.login);
router.get('/signup',homeController.signup)
router.get('/dasboard',passport.isAuthonticate,homeController.dasboard);
router.get('/',homeController.login);
router.get('/viewstudent/:id',passport.isAuthonticate,homeController.viewstudent);
router.get('/addstudent',passport.isAuthonticate,homeController.addstudent);
router.get('/editstudent/:id',passport.isAuthonticate,homeController.editstudent);
router.get('/addinterview',passport.isAuthonticate,homeController.addinterview);
router.get('/editinterview/:id',passport.isAuthonticate,homeController.editinterview);
router.get('/deletestudent/:id',passport.isAuthonticate,homeController.deletestudent);
router.get('/deleteinterview/:id',passport.isAuthonticate,homeController.deleteinterview);
router.get('/docdow',passport.isAuthonticate,homeController.docdow);
// all the get connection

// all the Post connection
router.post('/addstudent',passport.isAuthonticate,homeController.paddstudent);
router.post('/editstudent/:id',passport.isAuthonticate,homeController.peditstudent);
router.post('/addinterview',passport.isAuthonticate,homeController.paddinterview);
router.post('/editinterview',passport.isAuthonticate,homeController.peditinterview);
router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),homeController.plogin);
router.post('/signup',homeController.psignup);
// all the Post connection


// all routes connection




module.exports=router