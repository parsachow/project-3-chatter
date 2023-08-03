import { Card, Image, Icon, Segment } from "semantic-ui-react"

export default function PostCard({user, post}){
    return(
    
      <Card centered key={post._id}>
        <Card.Content>
          
            <Image
              floated='left'
              size='mini'
              avatar
              src={
                user.photoUrl
                ? user.photoUrl
                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                }
            />
            <Card.Header floated='left'>{user.username}</Card.Header>
          
        </Card.Content>

        <Card.Content>
          <Card.Description>
            {post.caption}
          </Card.Description>
          <Image 
          size="medium"
          src={post.photoUrl} />
            
        </Card.Content>
      
        <Card.Content extra textAlign={"right"}>
          <span>
          <Icon name="comments" size="large"/> reply
          <Icon name="like" size="large" /> like
        </span>
        </Card.Content>

      </Card>
   
    )
}