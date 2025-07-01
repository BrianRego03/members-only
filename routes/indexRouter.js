const {Router}=require("express");

indexRouter=Router();

const {loadSignUp}=require("../controllers/indexControllers")

indexRouter.get("/",loadSignUp);

module.exports=indexRouter;