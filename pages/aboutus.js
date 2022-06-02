import React from "react";
import row from 'react-bootstrap/row'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function AboutUs() {
    return (
        <Container fluid>
            <row>
                <col xs={4}>
                    <image src="./images/example-pic-1.png"></image>
                </col>
                <col xs={8}>
                    <h2>Allyson Nostrand</h2>
                    <p>
                        Blurb about Allyson.
                    </p>
                </col>
            </row>

            <row>
                <col xs={4}>
                    <image src="./images/example-pic-2.png"></image>
                </col>
                <col xs={8}>
                    <h2>Khari Robertson</h2>
                    <p>
                        Blurb about Khari.
                    </p>
                </col>
            </row>

            <row>
                <col xs={4}>
                    <image src="./images/example-pic-3.png"></image>
                </col>
                <col xs={8}>
                    <h2>Isis Alexander</h2>
                    <p>
                        Blurb about Isis.
                    </p>
                </col>
            </row>

        </Container>
    );
};

export default AboutUs;