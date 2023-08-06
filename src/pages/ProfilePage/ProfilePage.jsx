import SideBar from "../../components/SideBar/Sidebar";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Segment, Grid } from "semantic-ui-react";

import userService from "../../utils/userService";
import * as likeApi from "../../utils/likeApi"



export default function ProfilePage({ user, handleLogout }){

    const [posts, setPosts] = useState([]);
    const [userState, setUserState] = useState({});
    const [error, setError] = useState("");

    // grabbing the param from this route on App.jsx <Route path="/:username" element={<ProfilePage />} />
    const { username } = useParams();
    console.log(username);

    return(
        <>
        <SideBar user={user} handleLogout={handleLogout}/>
        <Grid>
            <Grid.Row>
                <Grid.Column>
                    <ProfileBio user={user}/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row centered>
                <Grid.Column style={{ maxWidth: 750 }}>
                        <PostGallery posts={posts} user={user} itemsPerRow={1} />
                </Grid.Column>
            </Grid.Row>
        </Grid>     
        </>
    )
}