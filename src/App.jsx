import { Route, Routes} from "react-router-dom";
import { useState } from "react";
import "./App.css";

import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import userService from "./utils/userService";


function App() {

  //get token from localstorage and decode it when the page loads up and set it as our initial state
  // if there is a token, user will be the user object, if there is no token user will be null
  const [user, setUser] = useState(userService.getUser());


  function handleSignupLogin(){
    setUser(userService.getUser())
  }

  if(!user){
    // if the user is not logged in only render the following routes
    return (
      <Routes>
        <Route path="/login" element={<LoginPage handleSignupLogin={handleSignupLogin} />} />
        <Route path="/signup" element={<SignUpPage handleSignupLogin={handleSignupLogin}/>} /> 
        <Route path="/*" element={<Navigate to='/login' />} />
      </Routes>
    )

  }

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage handleSignupLogin={handleSignupLogin}/>} />
      <Route path="/signup" element={<SignupPage handleSignupLogin={handleSignupLogin}/>} />
    </Routes>
  );
}

export default App;
