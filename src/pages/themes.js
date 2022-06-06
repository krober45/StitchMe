// import * as React from 'react';
import React, {useState,useEffect} from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

 function Themes() {

    return (
        <Container>
            <Row>
                <Col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Light Mode" />
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Dark Mode" />
                    </FormGroup>
                </Col>
            </Row >

            <Row>
                <Col>
                    <FormGroup>
                        <FormControlLabel control={<Switch defaultChecked />} label="Colorful Mode" />
                    </FormGroup>
                </Col>
            </Row>

        </Container >
    );
};

export default Themes