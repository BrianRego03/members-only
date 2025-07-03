const {createMessageDB}=require("../db/queries");

const createNewMessage=(req,res)=>{
    res.render("createMessage",{user:req.user});
}

const saveNewMessage=async(req,res)=>{
    try{
        console.log(req.body);
        console.log(req.user);
        await createMessageDB(req.body.content,req.user.id);

        // console.log("check");
        res.redirect("/");

    }
    catch(error){
        console.error(error);
    }
}
module.exports={createNewMessage,saveNewMessage};