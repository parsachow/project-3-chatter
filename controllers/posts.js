const Post = require("../models/post");

// helps generate random numbers for
// our file names, so every file name is unique
const { v4: uuidv4 } = require("uuid");
// import the s3 constructor
const S3 = require("aws-sdk/clients/s3");
// initialize the S3 constructor so we have an object to talk to aws
const s3 = new S3();


const BUCKET_NAME = process.env.BUCKET_NAME;

module.exports = {
  create,
  index,
};

async function create(req, res) {
    console.log(req.body, req.file, " < req.body, req.file in posts/api create");
    //if there is a image file uploaded, then this block of code runs
    if (req.file) {
    // this is the location of where our file will stored on aws s3
    const filePath = `chatter/posts/${uuidv4()}-${req.file.originalname}`;
    // create the object we want to send to aws
    const params = { Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer };

    s3.upload(params, async function (err, data) {
      if (err) {
        console.log("===========================================");
        console.log(
          err,
          " err from aws, either your bucket name is wrong or your keys arent correct"
        );
        console.log("===========================================");
        res.status(400).json({ error: "Error from aws, check your terminal!" });
      }

      try {
        // Use our Model to create a document in the posts collection in Mongodb
        const post = await Post.create({
          caption: req.body.caption,
          user: req.user, // req.user is defined in config/auth. the client sends over the jwt token
          photoUrl: data.Location, // data.Location comes from the callback in the s3 upload
        });
        await post.populate("user"); // populating on a mongoose document! this gives us the user object
        // this response will show up in the feedPage in const responseData = await postsApi.create(post);
        console.log('201 post', post )
        return res.status(201).json({ data: post }); // <- this is what responseData should be
      } catch (err) {
        console.log()
        return res.status(400).json({ error: err });
      }
    });
  }
  else{
  try {
    
    const post = await Post.create({
      caption: req.body.caption,
      user: req.user, 
    });
    await post.populate("user"); 
    return res.status(201).json({ data: post }); // <- this is what responseData should be
  } catch (err) {
    return res.status(400).json({ error: err });
  }
  }}


  async function index(req, res) {
    console.log("index")
    try {
      // this populates the user when you find the posts
      // so we have access to the users information
      // when we fetch posts
      const posts = await Post.find({user: req.user._id}).populate("user").exec();
      res.status(200).json({ posts });
    } catch (err) {}
  }
  
  
  
  
  
  
  
  
  
  