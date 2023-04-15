const express=require('express');
const passport=require('passport');
const ejs=require('ejs');
const app=express();
const ejsLayouts=require('express-ejs-layouts');
const Port=8000;
const mongoose=require('mongoose');
const mongUrl="mongodb://localhost:27017/Placment_cell";
const path=require('path');
const session=require('express-session');
const passportLocal=require('./config/passport');
app.use(express.urlencoded({extended:true}));
// mongoDb connection
mongoose.connect(mongUrl,{useNewUrlParser:true}).then(()=>console.log('MongoDb connected'))
.catch(err=>console.log(err));
// mongoDb connection


// seting static files to use


// seting static files to use


// set view engine
app.use(ejsLayouts);
app.set('layout extractStyles', true);
app.set('view engine','ejs');
// set view engine
app.use(express.static('./assits'));


// passport plugin

app.use(session({
    name: 'Akash',
    // TODO change the secret before deployment in production mode
    secret: 'Passbookblud',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    }
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

