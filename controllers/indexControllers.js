const {fetchAllMessages}=require("../db/queries");


const loadIndex=async(req,res)=>{
    // console.log(req.user);
    let messages=await fetchAllMessages();
    console.log(messages);
    res.render("index",{messages: messages});
}

module.exports={loadIndex};