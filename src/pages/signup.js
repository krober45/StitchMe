import React from "react";
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'

function SignUp(props) {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");

    return (
        <Container>
            <Row>
                <Col>
                    <h1>Sign Up!</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    {/* <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </Form> */}
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => setUser(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={(e) => setPass(e.target.value)} />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href="/login">Already have an account?</a>
                </Col>
            </Row>

            <Row>
                <Col>
                    <Form>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container >
        
    );
};

export default SignUp;