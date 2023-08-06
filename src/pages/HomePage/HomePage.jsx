import SideBar from "../../components/SideBar/Sidebar"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import PostGallery from "../../components/PostGallery/PostGallery"

import * as postApi from "../../utils/postApi"
import * as likeApi from "../../utils/likeApi"

import { useState, useEffect } from "react"
import { Grid } from "semantic-ui-react"




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


  async function addLike(postId){
    try {
      const response = await likeApi.createLike(postId)
      console.log(postId, 'this is from addLike')
      // to update state we are just going to refetch the posts, because they will have the updated likes
      getAllPosts(); // updates state

    } catch(err){
      setError('error adding like')
      console.log(err, ' error')
    }
  }

  async function removeLike(likeId){
    console.log(likeId, "like ID")
    try {
      const response = await likeApi.removeLike(likeId);
      console.log(likeId, "remove like");
      // to update state we are just going to refetch the posts, because they will the updated
      // likes
      getAllPosts(); //  updates state

    } catch(err){
      setError('error removing like')
      console.log(err, ' error')
    }
  }

    return(
      
        <>
         <SideBar user={user} handleLogout={handleLogout}/>    

        <Grid centered>
        <Grid.Row >
          <Grid.Column style={{ maxWidth: 700 }}> 
          <AddPostForm user={user} handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column style={{ maxWidth: 700 }}>
             <PostGallery posts={posts} user={user} itemsPerRow={1}
             isProfile={false} addLike={addLike} removeLike={removeLike}/>
          </Grid.Column>
        </Grid.Row>
        </Grid> 

        </>
    )
}