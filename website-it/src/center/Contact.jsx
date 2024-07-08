import React, { useState } from 'react';
import './contact.css';
import { Link } from 'react-router-dom';
import Reddit from './img/reddit.png';
import Facebook from './img/facebook.png';
import WhatsApp from './img/whatsapp.png';
import Linkedin from './img/linkedin.png';
import Instagram from './img/instagram.png';
import Text from './components/Text';

const Contact = () => {
  const [isRegister, setIsRegister] = useState(true);

  const toggleForm = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className='sabsizro' >
      <header className="top-menu">
        <nav>
          <ul>
            <li><Link to="/" className='a'>Главная</Link></li>
            <li><Link to="/about" className='a'>О нас</Link></li>
            <li><Link to="/servis" className='a'>Услуги</Link></li>
            <li><Link to="/contact" className='a'>Контакты</Link></li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='contact'>
          <img src={Reddit} alt="Reddit" />
          <img src={Facebook} alt="Facebook" />
          <img src={WhatsApp} alt="WhatsApp" />
          <img src={Instagram} alt="Instagram" />
        </div>
        <div className="form-toggle">
          <button onClick={toggleForm} className={!isRegister ? 'active' : ''}>
            Войти
          </button>
          <button onClick={toggleForm} className={isRegister ? 'active' : ''}>
            Регистрация
          </button>
        </div>
        {isRegister ? (
          <div className="form-container">
            <h2>Регистрация</h2>
            <form id="register-form">
              <div className="input-group">
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" required />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" required />
              </div>
              <div className="input-group">
                <label htmlFor="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required />
              </div>
              <button type="submit">Зарегестрироваться</button>
            </form>
          </div>
        ) : (
          <div className="form-container">
            <h2>Войти</h2>
            <form id="login-form">
              <div className="input-group">
                <label htmlFor="login-username">Username</label>
                <input type="text" id="login-username" name="login-username" required />
              </div>
              <div className="input-group">
                <label htmlFor="login-password">Password</label>
                <input type="password" id="login-password" name="login-password" required />
              </div>
              <button type="submit">Войти</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default Contact;
