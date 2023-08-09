import { Segment, Form, Button, Image } from "semantic-ui-react";
import { useState } from "react";

export default function AddPostForm({ user, handleAddPost }) {

    const [state, setState] = useState({
        caption: ''
    })

    const [selectedFile, setSelectedFile] = useState('')


    function handleFileInput(e) {
        //empty array here to upload multiple files?
        setSelectedFile(e.target.files[0])
    }


    function handleChange(e) {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }


    function handleSubmit(e) {
        console.log(state)
        // Since we are sendinga file, prepare the object as formData to send to the server
        const formData = new FormData();
        formData.append('caption', state.caption)
        formData.append('photo', selectedFile)

        // call handleAddPost from HomePage, which calls our postsApi.create function in the utils folder
        handleAddPost(formData);//formData is the data we send to the server
    }

    return (
        <Segment>
            <Form autoComplete="off" onSubmit={handleSubmit}>
                <Segment>
                    <Image
                        avatar
                        src={
                            user.photoUrl
                                ? user.photoUrl
                                : "https://react.semantic-ui.com/images/wireframe/square-image.png"
                        }
                    /> {user.username}
                </Segment>
                <Form.TextArea placeholder="What's happening?!"
                    className="form-control"
                    name="caption"
                    value={state.caption}
                    onChange={handleChange}
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