import React from 'react';
import { Link } from 'react-router-dom';
import p from './img/p1.png';
import Image from './components/Image';
import Work from './img/work.jpeg';
import Work1 from './img/work1.jpg';
import Work2 from './img/work2.jpg';
import Work3 from './img/work3.jpg';
import Work4 from './img/work4.jpg';
import Work6 from './img/work6.jpeg';
import Work7 from './img/work7.jpg';
import Work8 from './img/work8.jpg';
import Work9 from './img/work9.jpg';
import Work10 from './img/work10.jpg';
import Prog from './img/prog.png';
import './about.css'; 

const About = () => {
  return (
    <div className="about-page">
      <header className="top-menu">
        <nav>
          <ul>
            <li><Link to="/" className='a'>Главная</Link></li>
            <li><Link to="/about" className='a'>О нас</Link></li>
            <li><Link to="#" className='a'>Услуги</Link></li>
            <li><Link to="#" className='a'>Контакты</Link></li>
          </ul>
        </nav>
      </header>

      <div className='about-container'>
        <div className='about-main'>
          <h1>Про нас</h1>
          <img src={p} alt="" />
        </div>
      </div>

      <div className='about-section'>
        <div className='about-text'>
          <h1>Компания-</h1><br />
          <h2>которая исполняет ожидание</h2>
        </div>
      </div>

      <div className='about-team'>
        <h1>Наша команда: &#128519; </h1>
        <div className='team-grid'>
          <Image iso={Work} name="Едика" />
          <Image iso={Work1} name="Мария" />
          <Image iso={Work2} name="Джош" />
          <Image iso={Work3} name="Мехмет" />
          <Image iso={Work4} name="Джейсон" />
          <Image iso={Work6} name="Джонни" />
          <Image iso={Work7} name="Нурия" />
          <Image iso={Work8} name="Анджелина" />
          <Image iso={Work9} name="Малика" />
          <Image iso={Work10} name="Кевин" />
        </div>
      </div>

      <div className='about-info'>
        <img src={Prog} alt="" />
        <div className='info-text'>
          <h1>Про нас &#128512; </h1>
          <p>
            Наша компания, HWorld, занимает лидирующие <br /> позиции в сфере информационных технологий и образования. <br /> Мы стремимся создавать <br /> инновационные решения и предоставлять качественное обучение, <br /> помогая людям развиваться и достигать новых высот в их карьере.
            <div className='our'><br /> Наша миссия <br /></div>
            Мы верим, что технологии имеют силу изменить мир к лучшему. <br /> Наша миссия – предоставлять доступ к высококачественному <br /> обучению в IT-сфере, делая его доступным для всех желающих. <br /> Мы стремимся быть надежным партнером <br /> для наших студентов и клиентов, <br /> помогая им освоить новые навыки и применять их на практике.
          </p>
        </div>
      </div>
      <div className='with' >
        <h1>Присойденяйся к нам &#129303; </h1>
      </div>
     
    </div>
  );
}

export default About;
