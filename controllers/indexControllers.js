


const loadIndex=(req,res)=>{
    console.log(req.user);
    res.render("index",{user: req.user});
}

module.exports={loadIndex};