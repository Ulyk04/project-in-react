import React from 'react';
import './Home.css';
import Comp from './img/comp1.png';
import Doc from './img/doc1.png';
import Internet from './img/internet1.png';
import Java from './img/java.png';
import Py from './img/py.png';
import Frame from './components/Frame';
import Frontend from './img/frontend.png';
import Backend from './img/backend.png';
import {Link} from 'react-router-dom';


const Home = () => {
  return (
    
    <div>
         <header class="top-menu">
        <nav>
            <ul>
                <li><Link to="/" className='a' > Главная </Link></li>
                <li><Link to="/about" className='a' > О нас </Link></li>
                <li><Link to="/servis" className='a' > Услуги </Link></li>
                <li><Link to="/contact" className='a' > Контакты </Link></li>
            </ul>
        </nav>
    </header>

    <main>
        <section class="content">
            <h1>Лучшие услуги <br />в сфере IT - технологий</h1>
            <h2>Помогаем всем в изучений IT</h2>
            <hr />
            <br />
            <div className='ic' >
                <div className='icon' >
                    <div>
                        <img src={Comp} className='comp' />
                        <p>Лучшие технологий</p>
                    </div>
                    <div>
                        <img src={Doc} className='doc' />
                        <p>Легко доступный</p>
                    </div>
                    <div>
                        <img src={Internet} className='internet' />
                        <p>Быстрый интернет</p>
                    </div>
                </div>
            </div>
            <div className='ram' >  
                <div className='icon-container' >
                    <Frame imageSrc={Java} description="Обучение програмному языку Java " />
                    <Frame imageSrc={Py} description="Обучение DataBase и Python" />
                    <Frame imageSrc={Frontend} description="Обучение HTML , CSS и JavaScript" />
                    <Frame imageSrc={Backend} description="Обучение PHP и Ruby" />
                </div>
            </div>
            <div className='line' >
                <div className='linen' >
                ---
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div className='foot' >
            <p>&copy; Ulykpan Kaisar</p>
        </div>
    </footer>
    </div>
    
  );
};

export default Home;