import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import project from './images/MH-project-pic.jpg';

function Project() {
    return (
        <Container>
            <Row>
                <Col>
                <img src={project} alt="MH chaotic gore mangala"/>
                </Col>
                <Col>
                    <h2>Notes:</h2>
                    <li><h4>Embroidery Type:</h4></li>
                    <li><h4>Project Use:</h4></li>
                    <li><h4>Colors Used:</h4></li>
                    <li><h4>Fabric Used:</h4></li>
                    <li><h4>Pattern Link:</h4></li>

                </Col>
            </Row>

            <Row>
                <Col>
                    <h2>Directions/To-Do:</h2>
                    <li><h4>Add fabric to hoop</h4></li>
                    <li><h4>Wrap skeins around spools </h4></li>
                    <li><h4>Pick out needle</h4></li>
                    <li><h4>Decide which corner of pattern to start</h4></li>
                </Col>

                <Col>
                    {/* a carousel would be neat but i dunno if that would actually work with cloudinary?? */}
                </Col>
            </Row>


        </Container>
    );
};

export default Project;