// import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'
import Home from './pages/home';
import Login from './pages/Login';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  

  return (
    <div className="App">
    
      <h1>Food Court</h1>
      <div>
      
        <Router>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        
                        <Nav.Item>
                          <Link to='/'> Home </Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                          <Link to='login'> Login </Link>
                        </Nav.Item>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login/' element={<Login/>}/>
            </Routes>
        </Router>
      </div>
      
    </div>
  )
}

export default App
