const path = require("node:path");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const pgSession=require("connect-pg-simple")(session);
const pool = require("./db/pool");

const app =express();

const assetsPath= path.join(__dirname,"public");

const indexRouter=require("./routes/indexRouter");
const signUpRouter=require("./routes/signUpRouter");
const logInRouter=require("./routes/logInRouter");
const logOutRouter=require("./routes/logOutRouter");
const createRouter=require("./routes/createRouter");
const membershipRouter=require("./routes/membershipRouter");
const initializeAuth=require("./config/passport-config");

app.use(express.static(assetsPath));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use(session(
    {
        store: new pgSession({
            pool:pool,
            tableName:"session"
        }),
        secret:"topStuff",
        resave:false,
        saveUninitialized:false,
        cookie:{
            maxAge:24*60*60*1000
        }
    }

));

initializeAuth();
app.use(passport.session());

app.use((req,res,next)=>{
    res.locals.user =req.user;
    next();
})


app.use("/",indexRouter);
app.use("/signup",signUpRouter);
app.use("/login",logInRouter);
app.use("/logout",logOutRouter);
app.use("/create",createRouter);
app.use("/member",membershipRouter);

const PORT=3000;
app.listen(PORT,()=>{
    console.log("we good");
})