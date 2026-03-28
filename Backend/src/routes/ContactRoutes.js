

const express = require("express");
const ContactRoutes = express.Router();

const { SendMails } = require("../controllers/ContactController");
const   SendMailValidate = require("../middleware/ContactValidate");


ContactRoutes.post("/contact",  SendMailValidate,  SendMails);

module.exports = ContactRoutes ;
