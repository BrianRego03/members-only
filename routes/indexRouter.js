const {Router}=require("express");

indexRouter=Router();

const {loadIndex,messageDeletion}=require("../controllers/indexControllers")

indexRouter.get("/",loadIndex);

indexRouter.post("/delete",messageDeletion);

module.exports=indexRouter;