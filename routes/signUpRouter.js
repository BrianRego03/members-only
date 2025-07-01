const {Router}=require("express");

signUpRouter=Router();

const {loadSignUp}=require("../controllers/signUpControllers")

signUpRouter.get("/",loadSignUp);

module.exports=signUpRouter;