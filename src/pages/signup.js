import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from 'react-router-dom'
import API from '../utils/API'

function SignUp(props) {

    let navigate = useNavigate();
    const [errormessage, setErrorMessage] = useState("")

    const [signupData, setSignupData] = useState({
        username:"",
        password:""
    });

    const handleSignupSubmit= e =>{
        e.preventDefault();
        setSignupData({
            username:"",
            password:""
        })
            if (signupData.password.length < 8 ){
                setErrorMessage("password must be at least 8 characters")
            } else if (!signupData.username){
                setErrorMessage("please type in a username")
            }
        API.signup(signupData).then(data=>{
            console.log("this is signup data", data)
            props.setUserId(data.user._id)
            props.setUsername(data.user.username)
            navigate(`../profile/${data.user._id}`, { replace: true })
            if(data.token){
                props.setToken(data.token)
                localStorage.setItem("token", data.token)
          }
        })
      }

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Sign Up!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleSignupSubmit}>
                            <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={signupData.username} name="signupUsername" onChange={(e)=>setSignupData({...signupData,username:e.target.value})} />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"  value={signupData.password} name="signupPassword" onChange={(e)=>setSignupData({...signupData,password:e.target.value})}/>
                            <p>{errormessage}</p>
                            <Button variant="primary" type="submit">Sign Up</Button>
                            </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Link to={"/login"}>Already have an account?</Link>
                </Col>
            </Row>
        </Container >
        
    );
};

export default SignUp;