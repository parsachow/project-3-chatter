import tokenService from "./tokenService";

const BASE_URL = '/api'

//As user is logged in, we have to send header with authorization token

export function createLike(postId){
	return fetch(`${BASE_URL}/posts/${postId}/likes`, {
		method: 'POST',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() 
		}
	}).then(res => res.json()); 
}

export function removeLike(likeId){
	return fetch(`${BASE_URL}/likes/${likeId}`, {
		method: 'DELETE',
		headers: {
			// convention for sending jwts
			
			Authorization: "Bearer " + tokenService.getToken() 
		}
	}).then(res => res.json());
}