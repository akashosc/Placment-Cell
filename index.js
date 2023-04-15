const express=require('express');
require('dotenv').config('./.env');
const passport=require('passport');
const ejs=require('ejs');
const app=express();
const ejsLayouts=require('express-ejs-layouts');
const Port=8000;
const mongoose=require('mongoose');
const mongUrl="mongodb://localhost:27017/Placment_cell";
const mongo="mongodb+srv://akash7067tiwari:hello@cluster0.ife2e1w.mongodb.net/?retryWrites=true&w=majority";
const path=require('path');
const session=require('express-session');
const passportLocal=require('./config/passport');
app.use(express.urlencoded({extended:true}));
// mongoDb connection
mongoose.connect(mongo,{useNewUrlParser:true}).then(()=>console.log('MongoDb connected'))
.catch(err=>console.log(err));
// mongoDb connection


// seting static files to use


// seting static files to use


// set view engine
app.use(ejsLayouts);
app.set('layout extractStyles', true);
app.set('view engine','ejs');
app.set('views', path.join(__dirname, 'views'));
// set view engine
// app.use(express.static('./assits'));
app.use(express.static(__dirname + '/assits'));

// passport plugin

app.use(session({
    name: 'Akash',
    // TODO change the secret before deployment in production mode
    secret: 'Passbookblud',
    saveUninitialized: false,
    resave: false,
    
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);
// passport plugin



// routes connection
app.use('/',require('./routes'));
// routes connection
app.listen(Port,(err)=>{
    console.log(`Website is ready to use in Server port${Port}`);
})

