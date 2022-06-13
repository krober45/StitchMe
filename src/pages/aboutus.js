import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import pic1 from './images/our-pics/ally-image-trans.png';
import pic2 from './images/our-pics/khari-image-trans.png';
import pic3 from './images/our-pics/isis-image-trans.png';

function AboutUs(props) {
    return (
        <Container>
            <Row>
                <Col xs={3} id="allyson-pic">
                    <img src={pic1} alt="Allyson" />
                </Col>
                <Col xs={8} id="allyson-box">
                    <h2><a href="https://github.com/allysonnostrand" target="_blank">Allyson Nostrand</a></h2>
                    <p id="blurb">
                    Hi there! I'm a full-stack web developer from Washington state who loves to play games and make art. I'm always looking for new ways to be creative and incorporate what I love into the applications I make.
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={3} id="khari-pic">
                    <img src={pic2} alt="Khari" />
                </Col>
                <Col xs={8} id="khari-box">
                    <h2><a href="https://github.com/krober45" target="_blank">Khari Robertson</a></h2>
                    <p id="blurb">
                    Hey! I'm a fullstack web developer from Baltimore! I've always loved art but I'm constantly unorganized, which makes reaching deadlines difficult. This app was designed to help all our fellow unorganized artist!
                    </p>
                </Col>
            </Row>

            <Row>
                <Col xs={3} id="isis-pic">
                    <img src={pic3} alt="Isis" />
                </Col>
                <Col xs={8} id="isis-box">
                    <h2><a class="github" href="https://github.com/QueenOfBirbs" target="_blank">Isis Alexander</a></h2>
                    <p id="blurb">
                    I'm Isis, I'm 23 years old and a new web developer. My personal favorite thing to do is CSS and layouts for HTML/Apps/etc.. It's the perfect way to combine my art student ways with modern technology, and to join in on a new career oppurtunity. 
                    
                    I'm the group's resident embroiderer, and I thought this was a really neat idea for organinzation; as I tend to have many projects half-done and forget to finish them quite often. I live in the Seattle area and have a cat named Tycho, who loves to sit in mt lap while I code.
                    </p>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutUs;