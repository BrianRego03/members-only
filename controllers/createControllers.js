const createNewMessage=(req,res)=>{
    res.render("createMessage",{user:req.user});
}

const saveNewMessage=async(req,res)=>{
    try{
        // await createMessageDB(req.content,req.id);
        console.log(req.body);
        console.log(req.user);
        console.log("check");

    }
    catch(err){

    }
}
module.exports={createNewMessage,saveNewMessage};