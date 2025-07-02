const createNewMessage=(req,res)=>{
    res.render("createMessage",{user:req.user});
}

module.exports={createNewMessage};