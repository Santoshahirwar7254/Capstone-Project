
// usermodel schema

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {          ///user name
        type: String,
        required: true
    },
    email: {    //user email
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {     ///user passwords
        type: String,
        required: true
    },
    //  for email clerk verification
    clerkId: {
        type: String,

    },
    provider: {
        type: String,
        enum: ["manual", "clerk"],
        default: "manual"
    },

    isVerified: {
        type: Boolean,
        default: false
    }
   
    
},{
    timestamps : true
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
