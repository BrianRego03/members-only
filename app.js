const path = require("node:path");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy =require("passport-local").Strategy;
const pgSession=require("connect-pg-simple")(session);
const pool = require("./db/pool");

const app =express();

const assetsPath= path.join(__dirname,"public");

const indexRouter=require("./routes/indexRouter");
const signUpRouter=require("./routes/signUpRouter");
const logInRouter=require("./routes/logInRouter");

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

app.use(passport.session());



app.use("/",indexRouter);
app.use("/signup",signUpRouter);
app.use("/login",logInRouter);

const PORT=3000;
app.listen(PORT,()=>{
    console.log("we good");
})