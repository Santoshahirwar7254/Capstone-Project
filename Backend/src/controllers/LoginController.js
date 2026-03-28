
// Login controller

const bcrypt = require('bcrypt'); //bcrypt is used for hashing password
const jwt = require('jsonwebtoken'); // jwt is a authentication toke used for verify whether a user is looged in or not
const UserModel = require("../models/User"); //UserModel comes from models


// login logic

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await UserModel.findOne({ email });
        const errorMessage = "Login failed email or password is wrong";
        if(!user){
            return res.status(403)
            .json({
                message: errorMessage,
                success: false
            });
        }
        const  PasswordEqual = await bcrypt.compare(password, user.password);
        if(!PasswordEqual){                //check password  if in singup or login password equal
            return res.status(403)
            .json({
                message: errorMessage,
                success: false
            });

        }
        const jwtToken = jwt.sign(
            { email: user.email, _id: user._id },
            process.env.jwt_SECRET,
            { expiresIn: "7d" }
        )
        res.status(200)
        .json({
            message: "login succesfully",
            success: true,
            jwtToken,
            email,
            name: user.name
        })
    }catch(error){
        res.status(500)
        .json({
            message: "login failed", error, 
            success: false
        })
    }
}

module.exports = login;








