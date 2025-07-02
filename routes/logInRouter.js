const {Router}=require("express");
const { loadLogIn, userLogIn } = require("../controllers/loginControllers");

logInRouter=Router();

logInRouter.get("/",loadLogIn);
logInRouter.post("/",userLogIn);

module.exports=logInRouter;