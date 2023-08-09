import { Card, Image, Icon } from "semantic-ui-react"

export default function PostCard({ user, post, addLike, removeLike, isProfile }) {
  console.log(post)
  // Find out if the logged in user (user) is in the post.likes array
  const likedIndex = post.likes.findIndex(like => {
    console.log(like.userId, user._id);
    return like.userId === user._id

  });

  // if the user has liked the post, likedIndex is greater then -1 so the likeColor should be red
  const likeColor = likedIndex > -1 ? 'red' : 'grey';

  // If the user's username is in the likes array of the post, return the index of that object in the post.likes array
  // if findIndex doesn't find a match it returns -1

  const handleLikesClick = likedIndex > -1 ? () => removeLike(post.likes[likedIndex]._id) : () => addLike(post._id)




  return (

    <Card centered key={post._id}>
      {isProfile ? null : (
        <Card.Content textAlign="left" >

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
          <Card.Content textAlign="right">
            <Icon name="cancel" />
          </Card.Content>
        </Card.Content>
      )}
      <Card.Content>
        <Card.Description>
          {post.caption}
        </Card.Description>
      </Card.Content>
      {post.photoUrl ? <Image
        size="small"
        src={`${post.photoUrl}`} wrapped ui={false} /> : null}


      <Card.Content extra textAlign={"right"}>
        <span>
          <Icon name="comments" size="large" /> reply
          <Icon name={"like"} size="large" color={likeColor} onClick={handleLikesClick} /> {post.likes.length} like
        </span>
      </Card.Content>

    </Card>

  )
}