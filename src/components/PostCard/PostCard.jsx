import { Card, Image, Icon } from "semantic-ui-react"

export default function PostCard({user, post}){
    return(
    <Card.Group>
    <Card>
      {/* <Description />
      <image /> */}
      <Card.Content>

        <span>
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
        <Card.Header>{user.username}</Card.Header>
        </span>

        <Card.Description>
          {post.caption}
          {post.photoUrl}
        </Card.Description>

      </Card.Content>

      <Card.Content extra textAlign={"right"}>
        <span>
        <Icon name="like" size="large" />
        <Icon name="comments" size="large"/>
        </span>
      </Card.Content>

    </Card>
    </Card.Group>
    )
}