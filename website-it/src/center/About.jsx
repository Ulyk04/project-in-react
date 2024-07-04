import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';
import p from './img/p1.png';
import Image from './components/Image';
import Work from './img/work.jpeg';
import Work1 from './img/work1.jpg';
import Work2 from './img/work2.jpg';
import Work3 from './img/work3.jpg';
import Work4 from './img/work4.jpg';
import Work6 from './img/work6.jpeg';

export const About = () => {
  return (
    <div>
      <header class="top-menu">
        <nav>
            <ul>
                <li><Link to="/" className='a' > Главная </Link></li>
                <li><Link to="/about" className='a' > О нас </Link></li>
                <li><Link to="#" className='a' > Услуги </Link></li>
                <li><Link to="#" className='a' > Контакты </Link></li>
            </ul>
        </nav>
      </header>

      <div className='wrap' >
        <div className='main' >
          <h1>Про нас</h1>
          <img src={p} alt="" />
        </div>
      </div>

      <div className='wrap1'>
        <div className='main1' >
          <h1>Компания-</h1><br />
          <h2>которая исполняет ожидание</h2>
        </div>
      </div>

      <div className='wrap3' >
        <div className='main3' >
          <h1>Наша команда</h1>
          <Image iso={Work} name="Едика" />
          <Image iso={Work1} name="Мария" />
          <Image iso={Work2} name="Джош" />
          <Image iso={Work3} name="Мехмет" />
          <Image iso={Work4} name="Джейсон" />
          <Image iso={Work6} name="Джонни" />
        </div>
      </div>
    </div>
  )
}

export default About;