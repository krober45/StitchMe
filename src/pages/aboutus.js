import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import pic1 from './images/example-pic-1.png';
import pic2 from './images/example-pic-2.png';
import pic3 from './images/example-pic-3.png';

function AboutUs() {
    return (
        <Container>
            <Row>
                <Col xs={4}>
                <img src={pic1} alt="Aira icon"/>
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
                <img src={pic2} alt="Rinne icon"/>
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
                <img src={pic3} alt="Arashi icon"/>
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