const {fetchAllMessages}=require("../db/queries");


const loadIndex=(req,res)=>{
    // console.log(req.user);
    fetchAllMessages();
    res.render("index",{user: req.user});
}

module.exports={loadIndex};