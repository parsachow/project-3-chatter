import { Segment, Form, Button, Image } from "semantic-ui-react";


export default function AddPostForm(){
    return(
        <Segment>
        <h4>post form</h4>
        <Form>
        <Image
        floated="left"
        avatar
        src={
        post.user.photoUrl
         ? post.user.photoUrl
         : "https://react.semantic-ui.com/images/wireframe/square-image.png"
        }
        />
        <Form.TextArea placeholder="What's happening?!"
        className="form-control"
        name="caption"
        value={state.caption}
        required
         />
        <Form.Input
        className="form-control"
        type="file"
        name="photo"
        placeholder="upload image"
        onChange={handleFileInput}
         />
        <Button type="submit" className="btn">
        Post
        </Button>
        </Form>
        </Segment>
    )
}