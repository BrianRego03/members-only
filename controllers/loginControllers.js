const passport = require("passport");




const loadLogIn=(req,res)=>{
    res.render("logIn");
}

const userLogIn=passport.authenticate("local",{
    successRedirect:"/",
    failureRedirect:"/"
})

module.exports={loadLogIn,userLogIn}