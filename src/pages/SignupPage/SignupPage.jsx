import { useState } from 'react'
import userService from '../../utils/userService'
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import { Link, useNavigate} from 'react-router-dom'

import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


 

export default function SignupPage(){

    const [state, setState] = useState({
        username: '',
        email: '',
        password: '',
        passwordConf: '',
        bio: ''
    });

    const [error, setError] = useState('');

    const [selectedFile, setSelectedFile] = useState('')

    function handleChange(e){
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }

    function handleFileInput(e){
        setSelectedFile(e.target.files[0])
    }

    function handleSubmit(e){
        e.preventDefault();

        //createing fornData as we are sending a file to the server.
    }

    return(
        <span>
            
            <Image src="https://i.imgur.com/Mecn8D7.png" style={{ height: "50vh" }} verticalAlign="middle"/>

             <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
			 <Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="black" textAlign="center">
				 <Image src="https://www.un.org/sites/un2.un.org/files/2020/08/chat.png" /> Sign Up
			   </Header>
			   <Form autoComplete="off" onSubmit={handleSubmit}>
				 <Segment stacked>
				   <Form.Input
					 name="username"
					 placeholder="username"
					 value={state.username}
					 onChange={handleChange}
					 required
				   />
				   <Form.Input
					 type="email"
					 name="email"
					 placeholder="email"
					 value={state.email}
					 onChange={handleChange}
					 required
				   />
				   <Form.Input
					 name="password"
					 type="password"
					 placeholder="password"
					 value={state.password}
                     onChange={handleChange}
					 required
				   />
				   <Form.Input
					 name="passwordConf"
					 type="password"
					 placeholder="Confirm Password"
					 value={state.passwordConf}
					 onChange={handleChange}
					 required
				   />
				   <Form.TextArea
					 label="bio"
					 name="bio"
					 placeholder="Tell us about yourself"
					 value={state.bio}
					 onChange={handleChange}
				   />
				   <Form.Field>
					 <Form.Input
					   type="file"
					   name="photo"
					   placeholder="upload image"
					   onChange={handleFileInput}
					 />
				   </Form.Field>
				   <Button type="submit" className="btn">
					 Create Account
				   </Button>
				 </Segment>
                 <Message>
                    Already Registered? Login <Link to="/login">here!</Link>
                 </Message>
				 {error ? <ErrorMessage error={error} /> : null}
			   </Form>
			 </Grid.Column>
		   </Grid>
        </span>

    );
}