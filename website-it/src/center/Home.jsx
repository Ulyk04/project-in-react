import React from 'react';
import './Home.css';
import Back from './img/back1.jpg';
import Comp from './img/comp1.png';
import Doc from './img/doc1.png';
import Internet from './img/internet1.png';
import Java from './img/java.png';
import Py from './img/py.png';
import Frame from './components/Frame';
import Frontend from './img/frontend.png';
import Backend from './img/backend.png';


const Home = () => {
  return (
    <div>
         <header class="top-menu">
        <nav>
            <ul>
                <li><a href="#">Главная</a></li>
                <li><a href="#">О нас</a></li>
                <li><a href="#">Услуги</a></li>
                <li><a href="#">Контакты</a></li>
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
        <p>&copy; Ulykpan Kaisar</p>
    </footer>
    </div>
  )
}

export default Home;