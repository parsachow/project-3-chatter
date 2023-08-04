import SideBar from "../../components/SideBar/Sidebar";
import ProfileBio from "../../components/ProfileBio/ProfileBio";
import PostGallery from "../../components/PostGallery/PostGallery";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

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
        <h1>Profile Page</h1>
    )
}