

const handleLogOut=(req,res,next)=>{
    req.logout((err)=>{
        if(err){
            return next(err);
        }
        res.redirect("/");
    }

    )
}

module.exports={handleLogOut};