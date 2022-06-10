import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import pic1 from './images/example-pic-1.png';
import pic2 from './images/example-pic-2.png';
import pic3 from './images/example-pic-3.png';

function AboutUs(props) {
    return (
        <Container>
            <Row>
                <Col xs={3} id="allyson-pic">
                    <img src={pic1} alt="Aira icon" />
                </Col>
                <Col xs={8} id="allyson-box">
                    <h2><a href="https://github.com/allysonnostrand" target="_blank">Allyson Nostrand</a></h2>
                    <p id="blurb">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Tellus orci ac auctor augue mauris augue. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tempus egestas sed sed risus pretium. In dictum non consectetur a erat nam at lectus.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={3} id="khari-pic">
                    <img src={pic2} alt="Rinne icon" />
                </Col>
                <Col xs={8} id="khari-box">
                    <h2><a href="https://github.com/krober45" target="_blank">Khari Robertson</a></h2>
                    <p id="blurb">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Tellus orci ac auctor augue mauris augue. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tempus egestas sed sed risus pretium. In dictum non consectetur a erat nam at lectus.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={3} id="isis-pic">
                    <img src={pic3} alt="Arashi icon" />
                </Col>
                <Col xs={8} id="isis-box">
                    <h2><a class="github" href="https://github.com/QueenOfBirbs" target="_blank">Isis Alexander</a></h2>
                    <p id="blurb">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Orci sagittis eu volutpat odio facilisis mauris. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Tellus orci ac auctor augue mauris augue. Euismod in pellentesque massa placerat duis ultricies lacus sed turpis. Mauris vitae ultricies leo integer malesuada nunc vel risus. Tempus egestas sed sed risus pretium. In dictum non consectetur a erat nam at lectus.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;