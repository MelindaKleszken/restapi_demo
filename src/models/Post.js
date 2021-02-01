const mongoose = require('mongoose');

const postSchema = new mongoose.Schema(
    {
//title, content and timestamp
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    },
    { timestamps:true}
);

const Post = mongoose.model('Post', postSchema);

module.exports = {
    Post
}