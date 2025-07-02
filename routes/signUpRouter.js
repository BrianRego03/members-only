const {Router}=require("express");

signUpRouter=Router();

const {loadSignUp,saveSignUp}=require("../controllers/signUpControllers")

signUpRouter.get("/",loadSignUp);
signUpRouter.post("/",saveSignUp);

module.exports=signUpRouter;