import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './images/StitchMeLogo.png';

function Navigation() {
    return (
        <>
            <Navbar bg="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="app logo"
                        />
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>);
};

export default Navigation;