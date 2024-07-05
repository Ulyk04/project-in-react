import React from 'react';
import img from '../img/images1.png';
import './Ramka.css'

const Ramka = ({text}) => {
  return (
    <div className='wrap' >
        <div className='main' >
            <img src={img} alt="" />
            <p> {text} </p>
        </div>
    </div>
  )
}

export default Ramka