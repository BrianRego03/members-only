const {memberShipActivate,loadMembership}=require("../controllers/membershipControllers");

const {Router}=require("express");
membershipRouter=Router();

membershipRouter.get("/",loadMembership);
membershipRouter.post("/",memberShipActivate);

module.exports=membershipRouter;