import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link }
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
import logo from './images/stitchme-logo-v2-trans.png';

function App(props) {
  const [userId, setUserId] = useState();
  const [token, setToken] = useState();
  const [username, setUsername] = useState();

  useEffect(() => {
    const savedToken = localStorage.getItem("token");
    if (savedToken) {
      setToken(savedToken)
    }
  }, [])

  return (
    <Router>
      <ReactBootStrap.Navbar collapseOnSelect expand="lg" id="topbar">
        <ReactBootStrap.Container id="nav-container">
          <img
            id="logo"
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt="app logo"
          />
          <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
            <ReactBootStrap.Nav className="me-auto">
              <Link to={`/aboutus/${userId}`}>About us</Link>
              <Link to={`/profile/${userId}`}>Profile</Link>
              <ReactBootStrap.NavDropdown title="Projects" id="collasible-nav-dropdown">
              </ReactBootStrap.NavDropdown>
            </ReactBootStrap.Nav>
            <ReactBootStrap.Nav>
            </ReactBootStrap.Nav>
          </ReactBootStrap.Navbar.Collapse>
        </ReactBootStrap.Container>
      </ReactBootStrap.Navbar>

      <Routes>
        <Route path="/" element={<SignUp userId={userId} token={token} setToken={setToken} setUserId={setUserId} setUsername={setUsername} />} />
        <Route path="/login" element={<Login userId={userId} token={token} setToken={setToken} setUserId={setUserId} setUsername={setUsername} />} />
        <Route path="/profile/:id" element={<Profile userId={userId} token={token} username={username} />} />
        <Route path="/themes/:id" userId={userId} element={<Themes />} />
        <Route path="/aboutus/:id" userId={userId} element={<AboutUs />} />
        <Route path="/project/:id" userId={userId} element={<Project />} />
        <Route path="/update/:id" userId={userId} element={<Update />} />
        <Route path="/test" element={<TestPage />} />
      </Routes>
    </Router>
  );
}

export default App;