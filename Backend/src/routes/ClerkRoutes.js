// clerk routes

const express = require("express");
const ClerkRoutes = express.Router();

//require middleware &  controller

const clerkLogin  = require("../controllers/clerkController");
const  ClerkExpressRequireAuth = require("../middleware/clerkMiddleware");

 
// Routes
ClerkRoutes.post("/clerk", ClerkExpressRequireAuth, clerkLogin);

module.exports = ClerkRoutes;