import mongoose from "mongoose";

const registerSchema = mongoose.Schema({
    title: String,
    firstname: String,
    lastname: String,
    email: String,
    phoneNumber: String,
    password: String,
    interest: [String],
    createdAt:{
        type:Date,
        default: new Date()
    }
});

const registerUser = mongoose.model('registerUser', registerSchema);
export default registerUser;