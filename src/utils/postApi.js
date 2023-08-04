// we need to use the tokenService to get the token out of localstorage
import tokenService from "./tokenService";

const BASE_URL = '/api/posts/';

// Making a request to create a POST
// this function will occur when a user is logged in
// so we have to send the token to the server
export function create(data){
    return fetch(BASE_URL, {
    method: 'POST',
    body: data,
    headers: {
      Authorization: "Bearer " + tokenService.getToken() 
    // new Headers({'Content-Type': 'application/json'}),
    // body: JSON.stringify(data)
    }
  }).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() // so if everything went well in the response return 
		//the parsed json to where we called the function

		throw new Error('Something went wrong in create Post'); // this will go to the catch block when we call the function in the AddPostForm in handleSubmit function
	})
}




export function getAllPosts(){
  return fetch(BASE_URL, {
		method: 'GET',
	    headers: {
			
			Authorization: "Bearer " + tokenService.getToken()  
		}	
	}).then(responseFromTheServer => {
		if(responseFromTheServer.ok) return responseFromTheServer.json() 

		throw new Error('Something went wrong in getAllPosts, check the terminal!'); 
	
	})
}