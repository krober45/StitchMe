import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function AboutUs() {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                    <image src="./images/example-pic-1.png"></image>
                </Col>
                <Col xs={8}>
                    <h2>Allyson Nostrand</h2>
                    <p>
                        Blurb about Allyson.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={4}>
                    <image src="./images/example-pic-2.png"></image>
                </Col>
                <Col xs={8}>
                    <h2>Khari Robertson</h2>
                    <p>
                        Blurb about Khari.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={4}>
                    <image src="./images/example-pic-3.png"></image>
                </Col>
                <Col xs={8}>
                    <h2>Isis Alexander</h2>
                    <p>
                        Blurb about Isis.
                    </p>
                </Col>
            </Row>

        </Container>
    );
};

export default AboutUs;