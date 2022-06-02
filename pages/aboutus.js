import React from "react";
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'

function AboutUs() {
    return (
        <container>
            <div>
                <h2>Allyson Nostrand</h2>
                <image src="./images/example-pic.png"></image>
                <p>
                    Blurb about Allyson.
                </p>
            </div>

            <div>
                <h2>Khari Robertson</h2>
                <image src="./images/example-pic.png"></image>
                <p>
                    Blurb about Khari.
                </p>
            </div>

            <div>
                <h2>Isis Alexander</h2>
                <image src="./images/example-pic.png"></image>
                <p>
                    Blurb about Isis.
                </p>
            </div>

        </container>
    );
};

export default AboutUs;