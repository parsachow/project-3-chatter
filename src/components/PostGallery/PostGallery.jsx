import PostCard from "../PostCard/PostCard"
import { Card } from "semantic-ui-react"



export default function PostGallery({ posts, user }){

    const postCards = posts.map((post) => {
        return <PostCard post={post} key={post._id} user={user} />
    })


    return(
        
        <Card.Group itemsPerRow={1}>
            {postCards}
        </Card.Group>
    )
}