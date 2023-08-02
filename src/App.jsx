import { Route, Routes, Navigate} from "react-router-dom";
import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

import userService from "./utils/userService";


function App() {

  
  const [user, setUser] = useState(userService.getUser());


  function handleSignupLogin(){
    setUser(userService.getUser())
  }

  function handleLogout(){
    userService.logout();
    setUser(null);
  }

  if(!user){
    // if the user is not logged in only render the following routes
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleSignupLogin={handleSignupLogin} />} />
        <Route path="/signup" element={<SignupPage handleSignupLogin={handleSignupLogin}/>} /> 
        <Route path="/*" element={<Navigate to='/login' />} />
      </Routes>
    )

  }

  return (
    <Routes>
      <Route path="/" element={<HomePage user={user} handleLogout={handleLogout}/>} />
      <Route path="/login" element={<LoginPage handleSignupLogin={handleSignupLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignupLogin={handleSignupLogin}/>} />
      <Route path="/:username" element={<ProfilePage user={user} handleLogout={handleLogout}/>} />
    </Routes>
  );
}

export default App;
