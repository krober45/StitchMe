import React from "react";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './images/StitchMeLogo.png';
// import { slide as Menu } from 'react-burger-menu'

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

export default Navigation;