// import * as React from 'react';
import React, { useState, useEffect } from 'react'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Themes(props) {

    return (
        <Container id="theme-box">
            <Row>
                <Col>
                    <h1>Themes!</h1>
                    <FormGroup>
                        <div id="switch-text">
                            <FormControlLabel control={<Switch />} color="default" class="switch light" label="Light Mode" />
                            <h4 id="blurb"> A nice, bright theme for those who prefer something lighter!</h4>
                        </div>
                    </FormGroup>
                </Col>
            </Row>

            <Row>
                <Col>
                    <FormGroup>
                        <div id="switch-text">
                            <FormControlLabel control={<Switch />} color="default" class="switch dark" label="Dark Mode" /><h4 id="blurb">A darker theme; for those that prefer avoiding bright screens.</h4>
                        </div>
                    </FormGroup>
                </Col>
            </Row >

            <Row>
                <Col>
                    <FormGroup>
                        <div id="switch-text">
                            <FormControlLabel control={<Switch />} color="default" class="switch color" label="Colorful Mode" /><h4 id="blurb">A theme that looks like a grandma and a rainbow threw up on it.</h4>
                        </div>
                    </FormGroup>
                </Col>
            </Row>

        </Container >
    );
};

export default Themes