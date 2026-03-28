const  express = require("express");
const  loginRoutes = express.Router();
const login = require("../controllers/LoginController");
const LoginValidate = require("../middleware/LoginMiddleware");


loginRoutes.post("/login", LoginValidate, login );

module.exports =  loginRoutes;
