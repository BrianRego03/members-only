const bcrypt = require("bcryptjs");
const{addNewUser}=require("../db/queries");


const loadSignUp=(req,res)=>{
    res.render("signUp");
}

const saveSignUp=async(req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const firstName=req.body.firstname;
        const lastName=req.body.lastname;
        const email=req.body.email;
        console.log(req.body);
        await addNewUser(firstName,lastName,email,hashedPassword)
        res.redirect("/");
    }
    catch(error) {
        console.error(error);
        next(error);
    }
    

}

module.exports={loadSignUp,saveSignUp};