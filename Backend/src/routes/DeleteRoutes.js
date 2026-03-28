   ///Delete Router

const express = require("express");    ///require express from express 
const deleteEvent = require("../controllers/delete.EventController");   //require controller from delete controller

const DeleteRouter  = express.Router();  ///import require

// Delete router

DeleteRouter.delete("/delete/:id", deleteEvent);


// export  DeleteRouter

module.exports = DeleteRouter;

