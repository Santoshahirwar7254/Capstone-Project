//   signup Routes page

const  express = require("express");
const  signupRoutes = express.Router();
const  signup  = require("../controllers/SignupController"); //signup controller
const  SignupValidate  = require("../middleware/SignupMiddleware");  //signup middleware

signupRoutes.post("/signup",SignupValidate, signup )



module.exports = signupRoutes;
