const mongoose = require ('mongoose');

const postSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    caption: String,
    photoUrl: String,
    //embedded likes schema due to one to many relationship beteween 1 post containing many likes
    likes: [likesSchema]
})

const likesSchema = mongoose.Schema({
    userName: String,
    //using reference for userId bc we have a user model, so we can get user's info when needed
    userId: {type: mongoose.Schema.Types.ObjectId}
})

module.exports = mongoose.model('Post', postSchema);