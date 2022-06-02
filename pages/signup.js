import React from "react";
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function SignUp() {
    const [email, setEmail] = useState("");
    const [username, setUser] = useState("");
    const [password, setPass] = useState("");

    return (
        <Container>
            <row>
                <col>
                    <h1>Sign Up!</h1>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control type="email"
                                onChange={(e) => setEmail(e.target.value)} />
                        </Form.Group>
                    </Form>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text"
                                onChange={(e) => setUser(e.target.value)} />
                        </Form.Group>
                    </Form>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password"
                                onChange={(e) => setPass(e.target.value)} />
                        </Form.Group>
                    </Form>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Button variant="primary" type="submit">
                            Sign Up
                        </Button>
                    </Form>
                </col>
            </row>
        </Container >
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<SignUp />);

export default SignUp;