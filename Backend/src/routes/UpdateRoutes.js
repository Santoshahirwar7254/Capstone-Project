//  update events routes

const express = require("express");  //require express
const updateEvent = require("../controllers/Update.EventController");  // require update event controller from controller 
const UpdateRouter = express.Router();



UpdateRouter.put("/update/:id",updateEvent);

module.exports = UpdateRouter;

