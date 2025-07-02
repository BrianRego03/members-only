


const loadIndex=(req,res)=>{
    res.render("index",{user: req.user});
}

module.exports={loadIndex};