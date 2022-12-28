import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {HashRouter as Router, Routes, Route, Link} from 'react-router-dom'

import Home from './pages/home';
import Login from './pages/Login';
import Forums from './pages/Forums';
import Randomizer from './pages/Randomizer';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  
  return (
    <div className="App">
    
      <div>
      
        <Router>
            <Navbar bg="light" expand="sm">
                <Container>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{width:'30%', justifyContent:'space-around'}}>
                        
                        <Nav.Item>
                          <Link to='/'> Home </Link>
                        </Nav.Item>
                        
                        <Nav.Item>
                          <Link to='login'> Login </Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Link to='forum'> Forums </Link>
                        </Nav.Item>

                        <Nav.Item>
                          <Link to='randomPick'> Pick Page </Link>
                        </Nav.Item>

                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='login/' element={<Login/>}/>
              <Route path='forum/' element={<Forums/>}/>
              <Route path='randomPick' element={<Randomizer/>}/>
            </Routes>

        </Router>
      </div>
      
    </div>
  )
}

export default App
