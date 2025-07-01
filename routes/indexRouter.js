const {Router}=require("express");

indexRouter=Router();

const {loadIndex}=require("../controllers/indexControllers")

indexRouter.get("/",loadIndex);

module.exports=indexRouter;