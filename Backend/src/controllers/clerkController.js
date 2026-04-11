const UserModel = require("../models/User");
const { users } = require("@clerk/clerk-sdk-node");

const clerkLogin = async (req, res) => {
  try {
    const userId = req.auth?.userId;

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized request",
        success: false,
      });
    }

    const clerkUser = await users.getUser(userId);

    const email = clerkUser.emailAddresses[0].emailAddress;
    const name =
      `${clerkUser.firstName || ""} ${clerkUser.lastName || ""}`.trim();

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        name,
        email,
        clerkId: userId,
        provider: "clerk",
        isVerified: true,
      });
    }

    return res.status(200).json({
      message: "login successfully",
      success: true,
      user,
    });
  } catch (err) {
    console.log("CLERK ERROR:", err);

    return res.status(500).json({
      message: "clerk login error",
      error: err.message,
      success: false,
    });
  }
};

module.exports = clerkLogin;