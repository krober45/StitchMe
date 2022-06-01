import React from "react";
import Navbar from 'react-bootstrap/Navbar';
// import { slide as Menu } from 'react-burger-menu'

const Navbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            src="/images/StitchMeLogo.png"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#signup">Sign Up</Nav.Link>
                        <Nav.Link href="#profile">Profile</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>);
};

// sidebar hopefully! under construction

// class Example extends React.Component {
//     showSettings(event) {
//         event.preventDefault();
//     .
//     .
//     .
//     }

//     render() {
//         // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
//         return (
//             <Menu>
//                 <a id="home" className="menu-item" href="/">Home</a>
//                 <a id="about" className="menu-item" href="/about">About</a>
//                 <a id="contact" className="menu-item" href="/contact">Contact</a>
//                 <a onClick={this.showSettings} className="menu-item--small" href="">Settings</a>
//             </Menu>
//         );
//     }
// }

export default Navbar;