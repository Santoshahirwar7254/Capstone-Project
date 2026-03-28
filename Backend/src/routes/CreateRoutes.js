

// routes for Create Events

const express = require("express");
const CreateRouter =  express.Router();
const EventValidate  = require("../middleware/event.middleware.js");
const CreateEvent  = require("../controllers/create.EventController");



CreateRouter.post("/create", EventValidate, CreateEvent);   //routes



module.exports =   CreateRouter;













