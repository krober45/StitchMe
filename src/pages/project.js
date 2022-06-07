import React from "react";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import project from './images/MH-project-pic.jpg';
import CloudinaryUploadWidget from "../components/CloudinaryUploadWidget";


function Project() {
    return (
        <Container>
            <Row>
                <Col>
                    <CloudinaryUploadWidget />
                </Col>
                <Col>
                    <div>
                        <h2>Notes:</h2>
                        <li><h4>Embroidery Type:</h4></li>
                        <li><h4>Project Use:</h4></li>
                        <li><h4>Colors Used:</h4></li>
                        <li><h4>Fabric Used:</h4></li>
                        <li><h4>Pattern Link:</h4></li>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col>
                    <div>
                        <h2>Directions/To-Do:</h2>
                        <li><h4>Add fabric to hoop</h4></li>
                        <li><h4>Wrap skeins around spools </h4></li>
                        <li><h4>Pick out needle</h4></li>
                        <li><h4>Decide which corner of pattern to start</h4></li>
                    </div>
                </Col>

                <Col>
                    <CloudinaryUploadWidget />
                </Col>
            </Row>


        </Container>
    );

}
export default Project;