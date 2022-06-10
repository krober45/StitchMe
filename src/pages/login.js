import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import { useNavigate, Link } from 'react-router-dom'
import API from '../utils/API'


function Login(props) {

    let navigate = useNavigate();

    const [errormessage, setErrorMessage] = useState("")
    const [loginData, setLoginData] = useState({
        username: "",
        password: ""
    })

    const handleLoginSubmit = e => {
        console.log("handle login", loginData)
        e.preventDefault();
        console.log("data", loginData);
        setLoginData({
            username: "",
            password: ""
        })

        API.login(loginData).then(data => {
            console.log("this is the data", data)
            console.log("this is the user id", data.user._id)
            props.setUserId(data.user._id)
            console.log("this should be the user id", props.userId)
            navigate(`../profile/${data.user._id}`, { replace: true })
            if (data.token) {
                props.setToken(data.token)
                localStorage.setItem("token", data.token)
            }
        })
    }

    return (
        <Container id="login-box">
            <Row>
                <Col>
                    <h1 id="login">Login!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form onSubmit={handleLoginSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" value={loginData.username} name="loginUsername" onChange={(e) => setLoginData({ ...loginData, username: e.target.value })} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" value={loginData.password} name="loginPassword" onChange={(e) => setLoginData({ ...loginData, password: e.target.value })} />
                            <Button id="login-button" variant="primary" type="submit">Login</Button>
                            <p>{errormessage}</p>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    {/* <Form>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form> */}
                    <h5><Link to={"/"}>Need to create an account?</Link></h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Login;