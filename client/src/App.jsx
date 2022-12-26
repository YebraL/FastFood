// import './App.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/home';

function App() {
  

  return (
    <div className="App">
    
      <h1>Start Here</h1>
      <Home/>
    </div>
  )
}

export default App
