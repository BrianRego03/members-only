const {fetchAllMessages,deleteMessage}=require("../db/queries");


const loadIndex=async(req,res)=>{
    // console.log(req.user);
    let messages=await fetchAllMessages();
    // console.log(messages);
    res.render("index",{messages: messages});
}

const messageDeletion=async(req,res)=>{
    // console.log(req.body);
    await deleteMessage(req.body.id);
    res.redirect("/");
}

module.exports={loadIndex,messageDeletion};