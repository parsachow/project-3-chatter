const Post = require('../models/post')

module.exports = {
    create, 
    deleteLike
}

async function create(req, res){

    try {
        const post = await Post.findById(req.params.id);
        post.likes.push({username: req.user.username, userId: req.user._id}); //mutating a document
        await post.save()
        res.status(201).json({data: 'like added'})
    } catch(err){
        res.status(400).json({err})
    }

}

async function deleteLike(req, res){
    console.log("deleteLike");
    try {
        
        const post = await Post.findOne({
            'likes._id': req.params.id, 
            'likes.username': req.user.username})

        post.likes.remove(req.params.id);
        // req.params.id is the like id 
        await post.save(); 
        res.json({data: 'like deleted'})
    } catch(err){
        res.status(400).json({err})
    }

}
