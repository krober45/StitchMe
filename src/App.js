import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import Home from './pages';
import AboutUs from './pages/aboutus';
import Login from './pages/login';
import SignUp from './pages/signup';
import Themes from './pages/themes';
import Profile from './pages/profile';
import Project from './pages/project';
import Update from './pages/update';
  
function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/' exact element={<Home />} />
        <Route path='/aboutus' element={<AboutUs/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/signup' element={<SignUp/>} />
        <Route path='/themes' element={<Themes/>} />
        <Route path='/profile' element={<Profile/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/update' element={<Update/>} />
    </Routes>
    </Router>
);
}
  
export default App;