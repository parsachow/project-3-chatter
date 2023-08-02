import SideBar from "../../components/SideBar/Sidebar"
import AddPostForm from "../../components/AddPostForm/AddPostForm"
import PostGallery from "../../components/PostGallery/PostGallery"

import * as postApi from "../../utils/postApi"

import { useState, useEffect } from "react"
import { Grid } from "semantic-ui-react"

export default function HomePage({user, handleLogout}){

// The reasons we are setting posts state, is because then we can pass that data to the postgallery
// where it will be rendered!
  const [posts, setPosts] = useState([]); // array of objects containing the likes as well)
  const [error, setError] = useState("");


  async function handleAddPost(data){
    
  }

    return(
        <span>
        <SideBar user={user} handleLogout={handleLogout}/>    
        <Grid centered>
        <Grid.Row >
          <Grid.Column>
            <AddPostForm user={user} handleAddPost={handleAddPost}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row>
          <Grid.Column>
            <PostGallery />
          </Grid.Column>
        </Grid.Row>
        </Grid>
        </span>
    )
}