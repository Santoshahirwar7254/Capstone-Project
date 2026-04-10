// clerk controller

const UserModel = require("../models/User");
const  { users } = require("@clerk/clerk-sdk-node");

// get clerk user data and save to database
// clerk user functionality

const clerkLogin  = async (req, res) => {
    try{
        const  { userId } = req.auth;
        
        const clerkUser = await users.getUser(userId);

        const  email = clerkUser.emailAddresses[0].emailAddress;
        const name = clerkUser.firstName + " " + clerkUser.lastName;

        let user = await UserModel.findOne({ email });
        if(!user){
            user = await UserModel.create({
                name,
                email,
                clerkId : userId,
                provider: "clerk",
                isVerified : true
            });

            user.clerkId = userId;
            user.provider = "clerk";
            user.isVerified = true;
            await user.save();
        }
        res.status(201).json({
            message: "login successfully",
            user,
            success: true
        })
    }catch(err){
        res.status(500).json({
            message: "clerk login error",
            error: err.message,
            success: false
        })
    }
}

module.exports = clerkLogin;