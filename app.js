const path = require("node:path");

const express = require("express");
const session = require("express-session");
const passport = require("passport");
const localStrategy =require("passport-local").Strategy;

const app =express();

const assetsPath= path.join(__dirname,"public");
app.use(express.static(assetsPath));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));

const PORT=3000;
app.listen(PORT,()=>{
    console.log("we good");
})