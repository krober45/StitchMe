import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

function Profile() {
    return (
        <Container>
            <Row>
                <>
                    <Col>
                        <Stack>
                            <Button href="/project">Project 1</Button>
                            <Button href="/project">Project 2</Button>
                            <Button href="/project">Project 3</Button>
                            <Button href="/project">Add Project</Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <Button href="/themes">Themes</Button>
                            <Button href="/update">Update Username</Button>
                        </Stack>
                    </Col>
                </>
            </Row>
        </Container>
    );
};

export default Profile;