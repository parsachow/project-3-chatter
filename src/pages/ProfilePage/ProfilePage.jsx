import SideBar from "../../components/SideBar/Sidebar";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Segment, Grid, Loader } from "semantic-ui-react";

import userService from "../../utils/userService";
import * as likeApi from "../../utils/likeApi"



export default function ProfilePage({ user, handleLogout }){

    const [posts, setPosts] = useState([]);
    const [userState, setUserState] = useState({});
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("");

    // grabbing the param from this route on App.jsx <Route path="/:username" element={<ProfilePage />} />
    const { username } = useParams();
    console.log(username);

    async function getProfile() {

        try{
            setLoading(true);
            const data = await userService.getProfile(username);
            console.log(data)
            setPosts(data.posts);
            setUserState(data.user);
            setLoading(false)

        }catch(err){
            console.log(err)
            setError("Can't load/find Profile")
        }
    }

    useEffect (() => {

        getProfile();

    }, [username]);


    async function addLike(postId){
        try {
          const response = await likeApi.createLike(postId)
          console.log(postId, 'this is from addLike')
          // to update state we are just going to refetch the posts, because they will have the updated likes
          getProfile(); // updates state
    
        } catch(err){
          setError('error adding like')
          console.log(err, ' error')
        }
    }

    
    async function removeLike(likeId){
        console.log(likeId, "like ID")
        try {
          const response = await likeApi.removeLike(likeId)
          // to update state we are just going to refetch the posts, because they will the updated
          // likes
          getProfile(); //  updates state
    
        } catch(err){
          setError('error removing like')
          console.log(err, ' error')
        }
    }

    if (loading) {
        return(
            <> 
            <SideBar user={user} handleLogout={handleLogout}/>
            <Loader size='large' active inline='centered'>Loading</Loader>
            </>
        );
    }

    return(
        <>
        <SideBar user={user} handleLogout={handleLogout}/>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={userState}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                        <PostGallery posts={posts} user={user} itemsPerRow={1} isProfile={true} addLike={addLike} removeLike={removeLike}/>
                </Grid.Column>
            </Grid.Row>
        </Grid>     
        </>
    )
}