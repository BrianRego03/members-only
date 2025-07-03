const {activateMembership}=require("../db/queries");

const memberShipActivate=async(req,res)=>{
    if(req.body.memberPass===MEMBERCODE){
        await activateMembership(req.body.id);
        redirect("/",{activation:true});
    }
    else{
        redirect("/member",{activation:false});
    }
}

const loadMembership=()=>{
    res.render("member");
}

module.exports={loadMembership,memberShipActivate};