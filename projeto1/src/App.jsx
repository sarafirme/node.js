import './App.css'
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

function App() {

  return(
    <Router>
      <div className="app">
        <div className="content">
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
        </div>
      </div>
    
    </Router>)
 
}

export default App
