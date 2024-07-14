import React from 'react';
import { HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './center/Home';
import About from './center/About'; 
import Servis from './center/Servis';
import Contact from './center/Contact';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <header className='top-menu' >
          <nav>
            <ul>
              <li><Link to="/" className='a' >Главная</Link></li>
              <li><Link to="/about" className='a' >О нас</Link></li>
              <li><Link to="/servis" className='a' > Услуги </Link></li>
              <li><Link to="/contact" className='a' > Контакты </Link></li>
            </ul>
          </nav>
        </header>  
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/servis" element={<Servis/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
