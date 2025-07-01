const path = require("node:path");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy =require("passport-local").Strategy;

const app =express();

const assetsPath= path.join(__dirname,"public");

const indexRouter=require("./routes/indexRouter");
const signUpRouter=require("./routes/signUpRouter");

app.use(express.static(assetsPath));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

app.use("/",indexRouter);
app.use("/signup",signUpRouter);

const PORT=3000;
app.listen(PORT,()=>{
    console.log("we good");
})