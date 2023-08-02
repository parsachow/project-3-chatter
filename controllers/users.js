const User = require('../models/user');
const Post = require('../models/post')
const jwt = require('jsonwebtoken');
const SECRET = process.env.SECRET;


// helps generate random numbers for 
// our file names, so every file name is unique
const { v4: uuidv4 } = require('uuid');
// import the s3 constructor 
const S3 = require('aws-sdk/clients/s3');
// initialize the S3 constructor so we have an object to talk to aws
const s3 = new S3();

// since everyone has a unique bucket name, 
// its a good use case for a .env variable
// because we don't share that outside our computer
const BUCKET_NAME = process.env.BUCKET_NAME


module.exports = {
  signup,
  login
};

async function signup(req, res) {
  console.log(req.body, req.file, ' req.body', 'req.file');
  
  //if no file(photo) was uploaded, send err
  if(!req.file) return res.status(400).json({error: "Please Upload a Photo"});

  // this is the location of where our files will be stored on aws s3
  const filePath = `chatter/${uuidv4()}-${req.file.originalname}`

  // create the object we want to send to aws 
  const params = {Bucket: BUCKET_NAME, Key: filePath, Body: req.file.buffer}

  s3.upload(params, async function(err, data){
    if(err){
      console.log('===============================')
      console.log(err, ' <- error from aws, Probably telling you your keys arent correct')
      console.log('===============================')
      res.status(400).json({error: 'error from aws, check your terminal'})
    }

    // if s3 upload was successful create the user and store the file location
    req.body.photoUrl = data.Location; // data.Location is what we get back from aws of where Our file is stored
  
    const user = new User(req.body);
    try {
      await user.save();
      const token = createJWT(user);
      res.json({ token });
    } catch (err) {
      console.log(err)
      // Probably a duplicate email
      res.status(400).json(err);
    }
  })
}

async function login(req, res) {
 
  try {
    const user = await User.findOne({email: req.body.email});
   
    if (!user) return res.status(401).json({err: 'bad credentials'});
    user.comparePassword(req.body.password, (err, isMatch) => {
      
      if (isMatch) {
        const token = createJWT(user);
        res.json({token});
      } else {
        return res.status(401).json({err: 'bad credentials'});
      }
    });
  } catch (err) {
    return res.status(401).json(err);
  }
}

/*----- Helper Functions -----*/

function createJWT(user) {
  return jwt.sign(
    {user}, // data payload
    SECRET,
    {expiresIn: '24h'}
  );
}
