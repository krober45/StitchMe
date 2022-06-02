import React from "react";
import Form from 'react-bootstrap/Form';
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';


function Login() {
    return (
        <Container>
            <row>
                <col>
                    <h1>Login!</h1>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicText">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="text" />
                        </Form.Group>
                    </Form>
                </col>
            </row>
            <row>
                <col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </col>
            </row>
        </Container>
    );
};

export default Login;