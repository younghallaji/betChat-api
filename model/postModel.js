import mongoose from "mongoose";

const postSchema = mongoose.Schema({
    title: String,
    body: String,
    postedby: String,
    createdAt:{
        type:Date,
        default: new Date()
    }
});

const post = mongoose.model('post', postSchema);
export default post;