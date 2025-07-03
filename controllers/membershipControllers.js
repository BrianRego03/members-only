const {activateMembership}=require("../db/queries");
require("dotenv").config();

const memberShipActivate=async(req,res)=>{
    console.log(req.body);
    if(req.body.memberPass===process.env.MEMBERCODE){
        await activateMembership(req.user.id);
        res.redirect("/member");
        
    }
    else{
        res.redirect("/member");
    }
    
}

const loadMembership=(req,res)=>{
    res.render("member");
}

module.exports={loadMembership,memberShipActivate};