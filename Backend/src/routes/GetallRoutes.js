//   getall Events router

const express = require("express");
const GetEvents = require("../controllers/GetAll.EventController");
const GetallRouter =  express.Router();


GetallRouter.get("/allevents",GetEvents)


module.exports =  GetallRouter;