import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'



function Login(props) {
    const [loginData, setLoginData] = useState({
        username:"",
        password:""
    })

    const loginSubmit = e=>{
        e.preventDefault();
        console.log("data",loginData);
        props.login(loginData);
        setLoginData({
            username:"",
            password:""
        })
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1>Login!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <Form>
                       
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={loginData.username} name="loginUsername" onChange={(e)=>setLoginData({...loginData,username:e.target.value})}/>
                        
                    </Form> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={loginSubmit}>
                         <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={loginData.username} name="loginUsername" onChange={(e)=>setLoginData({...loginData,username:e.target.value})}/>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={loginData.password} name="loginPassword" onChange={(e)=>setLoginData({...loginData,password:e.target.value})}/>
                            <Button variant="primary" type="submit">Login</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="/">Need to create an account?</a>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* <Form>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form> */}
                </Col>
            </Row>
        </Container>
    );
};

export default Login;