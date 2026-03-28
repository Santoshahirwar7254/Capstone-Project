
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
        unique: true
    },
    password: {     ///user passwords
        type: String,
        required: true,
        unique: true
    }
});

const UserModel = mongoose.model('users', UserSchema);
module.exports = UserModel;
