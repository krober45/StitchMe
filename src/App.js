import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import SignUp from './pages/signup';
import Themes from './pages/themes';
import Profile from './pages/profile';
import Project from './pages/project';
import Update from './pages/update';
import TestPage from './pages/testPage';
import * as ReactBootStrap from "react-bootstrap";
  
function App() {

return ( 
  <Router>
    <ReactBootStrap.Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <ReactBootStrap.Container>
    <ReactBootStrap.Navbar.Brand href="/profile">StitchMe</ReactBootStrap.Navbar.Brand>
    <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
      <ReactBootStrap.Nav className="me-auto">
        {/* <ReactBootStrap.Nav.Link href="#features">Home</ReactBootStrap.Nav.Link> */}
        <ReactBootStrap.Nav.Link href="/aboutus">About us</ReactBootStrap.Nav.Link>
        <ReactBootStrap.NavDropdown title="Projects" id="collasible-nav-dropdown">
          {/* <ReactBootStrap.NavDropdown.Item href="/profile">My Profile</ReactBootStrap.NavDropdown.Item> */}
          <ReactBootStrap.NavDropdown.Item href="/project">Project Name</ReactBootStrap.NavDropdown.Item>
          {/* <ReactBootStrap.NavDropdown.Item href="#action/3.3">Saved Projects</ReactBootStrap.NavDropdown.Item> */}
          <ReactBootStrap.NavDropdown.Divider />
          {/* <ReactBootStrap.NavDropdown.Item href="#action/3.4">Help?</ReactBootStrap.NavDropdown.Item> */}
        </ReactBootStrap.NavDropdown>
      </ReactBootStrap.Nav>
      <ReactBootStrap.Nav>
        {/* <ReactBootStrap.Nav.Link href="#deets">Login</ReactBootStrap.Nav.Link>
        <ReactBootStrap.Nav.Link eventKey={2} href="#memes">
          Sign-up
        </ReactBootStrap.Nav.Link> */}
      </ReactBootStrap.Nav>
    </ReactBootStrap.Navbar.Collapse>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>

  <Routes>
    <Route path="/" element={<SignUp/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/profile" element={<Profile/>}/>
    <Route path="/themes" element={<Themes/>}/>
    <Route path="/aboutus" element={<AboutUs/>}/>
    <Route path="/project" element={<Project/>}/>
    <Route path="/update" element={<Update/>}/>
    <Route path="/test" element={<TestPage/>}/>
  </Routes>
</Router>
);
}
  
export default App;