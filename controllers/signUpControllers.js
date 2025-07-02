const bcrypt = require("bcryptjs");


const loadSignUp=(req,res)=>{
    res.render("signUp");
}

const saveSignUp=async(req,res,next)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        res.redirect("/");
    }
    catch(error) {
        console.error(error);
        next(error);
    }
    

}

module.exports={loadSignUp,saveSignUp};