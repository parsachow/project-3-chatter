import React from 'react';
import './LoginPage.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import userService from '../../utils/userService';
import ErrorMessage from '../../components/ErrorMessage/ErrorMessage';
import {
	Button,
	Form,
	Grid,
	Header,
	Image,
	Message,
	Segment,
  } from "semantic-ui-react";


export default function LoginPage({ handleSignupLogin }){
  
  const [state, setState] = useState({
    email: '',
    password: ''
  })

  const [error, setError] = useState('')

  const navigate = useNavigate();

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })

  }

  async function handleSubmit(e){
    e.preventDefault();

    try{
      await userService.login(state);
      handleSignupLogin();
      navigate('/')

    }catch(err){
      console.log(err)
      setError('error at handleSubmit. check terminal and console')
    }
  }

    return (
      <div>
        <Image src="https://i.imgur.com/Mecn8D7.png" style={{ height: "50vh" }} verticalAlign="middle"/>

        <Grid textAlign="center" style={{ height: "50vh" }} verticalAlign="middle">
			 <Grid.Column style={{ maxWidth: 450 }}>
				<Header as="h2" color="black" textAlign="center">
				 <Image src="https://www.un.org/sites/un2.un.org/files/2020/08/chat.png" /> Login
			   </Header>

         <Form autoComplete="off" onSubmit={handleSubmit}>
          <Segment stacked>

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

            <Button type="submit" className="btn">
              Login
            </Button>
          </Segment>
          <Message>
            New to Chatter? <Link to="/signup">Sign up</Link>
          </Message>
          {error ? <ErrorMessage error={error} /> : null}
        </Form>
      </Grid.Column>
    </Grid>
        </div>
      );
}

