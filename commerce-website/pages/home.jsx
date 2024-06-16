import './home.css';
import React,{useState} from 'react';
import logo from './logo.png';
import cart from './cart_icon.png';


function Home(){

    const [menu, setMenu ] = useState("shop");

    return(
    <div className='navbar' >
            <div className='wrapper'>
                <img src={logo} alt='logo'/>
                <p> Shopping </p>
            </div>
            <ul className='menu' >
                <li onClick={()=> {setMenu("shop")}} > Shop  {menu === "shop" ? <hr/>: <></> } </li>
                <li onClick={()=> {setMenu("mens")}} > Men {menu === "mens" ? <hr/>: <></> } </li>
                <li onClick={()=> {setMenu("womens")}} > Women {menu === "womens" ? <hr/>: <></> } </li>
                <li onClick={()=> {setMenu("kids")}} > Kids {menu === "kids" ? <hr/>: <></> } </li>
            </ul>
            <div className='login' >
                <button> Login </button>   
                <img src={cart} />    
                <div className='count'> 0 </div>
            </div>
        </div>
        )
}

export default Home;