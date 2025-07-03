const { Router } = require("express");

const{createNewMessage,saveNewMessage}=require("../controllers/createControllers")

createRouter = Router();

createRouter.get("/",createNewMessage);

createRouter.post("/",saveNewMessage)

module.exports=createRouter;