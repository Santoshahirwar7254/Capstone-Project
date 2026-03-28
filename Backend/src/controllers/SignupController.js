
// signup controller

const bcrypt = require("bcrypt");  //used for password hashing
const UserModel = require("../models/User"); // user schema in database



// signup functionality

const signup = async (req, res) => {
    try{

        const { name, email, password  } = req.body;  
        const user = await UserModel.findOne({ email });
        if(user){
            return res.status(409)
            .json({
                message: 'You are registerd you can login',
                success: false
            })
        }
        const  userModels = new UserModel({ name, email, password });
        userModels.password = await bcrypt.hash(password, 10);
        await userModels.save();
        res.status(201)
        .json({
            message: "signup successfully",
            success: true
        })
    }catch(error){
        res.status(500)
        .json({  message: "server error", error, success: false });
    }
}

module.exports = signup;