import tokenService from "./tokenService";

const BASE_URL = '/api'

//As user is logged in, we have to send header with authorization token

export function createLike(postId){
	return fetch(`${BASE_URL}/posts/${postId}/likes`, {
		method: 'POST',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
		}
	}).then(res => res.json()); 
}

export function removeLike(likeId){
	return fetch(`${BASE_URL}/likes/${likeId}`, {
		method: 'DELETE',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() // < this is how we get the token from localstorage and and it to our api request
			// so the server knows who the request is coming from when the client is trying to make a POST
		}
	}).then(res => res.json());
}