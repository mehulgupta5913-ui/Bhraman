const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    
});

userSchema.plugin(passportLocalMongoose); // This will add username, hash and salt fields to the schema

module.exports = mongoose.model("User", userSchema);