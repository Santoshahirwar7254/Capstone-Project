const express = require("express");
const ClerkRoutes = express.Router();

const clerkLogin = require("../controllers/clerkController");
const ClerkExpressRequireAuth = require("../middleware/clerkMiddleware");

ClerkRoutes.post("/clerk", ClerkExpressRequireAuth, clerkLogin);

module.exports = ClerkRoutes;