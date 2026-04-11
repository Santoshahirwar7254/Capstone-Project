const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      index: true,
    },

    
    password: {
      type: String,
      default: null,
    },

    clerkId: {
      type: String,
    },

    provider: {
      type: String,
      enum: ["manual", "clerk"],
      default: "manual",
    },

    isVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("users", UserSchema);