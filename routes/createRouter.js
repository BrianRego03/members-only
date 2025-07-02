const { Router } = require("express");

const{createNewMessage}=require("../controllers/createControllers")

createRouter = Router();

createRouter.get("/",createNewMessage)

module.exports=createRouter;