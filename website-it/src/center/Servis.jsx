import React from 'react';
import './Servis.css';
import { Link } from 'react-router-dom';


const Servis = () => {
  return (
    <div className='container' >
        <header className="top-menu">
            <nav>
                    <ul>
                        <li><Link to="/" className='a'>Главная</Link></li>
                        <li><Link to="/about" className='a'>О нас</Link></li>
                        <li><Link to="/servis" className='a'>Услуги</Link></li>
                        <li><Link to="#" className='a'>Контакты</Link></li>
                    </ul>
                </nav>
        </header>
    </div>
  )
}

export default Servis