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
                            <Button href="#">Project 1</Button>
                            <Button href="#">Project 2</Button>
                            <Button href="#">Project 3</Button>
                            <Button href="#">Add Project</Button>
                        </Stack>
                    </Col>
                    <Col>
                        <Stack>
                            <Button href="#themes">Link</Button>
                            <Button href="#update">Link</Button>
                        </Stack>
                    </Col>
                </>
            </Row>
        </Container>
    );
};

export default Profile;