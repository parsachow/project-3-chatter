import SideBar from "../../components/SideBar/Sidebar"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import PostGallery from "../../components/PostGallery/PostGallery"

import * as postApi from "../../utils/postApi"

import { useState, useEffect } from "react"
import { Grid, Segment } from "semantic-ui-react"




export default function HomePage({user, handleLogout}){

// The reasons we are setting posts state, is because then we can pass that data to the postgallery
// where it will be rendered!
  const [posts, setPosts] = useState([]); // array of objects containing the likes as well)
  const [error, setError] = useState("");


//we want to update state whenever we change a POST CRUD operations
  async function handleAddPost(data){

    try{

      const responseData = await postApi.create(data);
      console.log(responseData, 'response from server in handleAddPost')
      setPosts([responseData.data, ...posts]);

    }catch(err){
      console.log(err, 'error in handleAddPost in HomePage')
      setError('error creating Post. Please try again.')
    }
    
  }

  async function getAllPosts(){
    try{
      const responsefromServer = await postApi.getAllPosts();
      // this is the getAllPosts function from post utils
      console.log(responsefromServer);
      setPosts(responsefromServer.posts)

    }catch(err){
      console.log(err, 'error in getAllPosts')
    }
  }

  useEffect(() => {
    getAllPosts();
  }, [])

    return(
      
        <>
        <SideBar user={user} handleLogout={handleLogout}/>    
        <AddPostForm user={user} handleAddPost={handleAddPost}/>
        <Grid centered>
        <Grid.Row >
          <Grid.Column style={{ maxWidth: 750 }}> 
          <AddPostForm user={user} handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 700 }}>
             <PostGallery posts={posts} user={user} itemsPerRow={1}/>
          </Grid.Column>
        </Grid.Row>
        </Grid> 
        </>
    )
}