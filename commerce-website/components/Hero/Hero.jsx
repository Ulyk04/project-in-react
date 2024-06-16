import React from 'react'
import hand from '../assets/hand_icon.png'
import './Hero.css';
import arrow from '../assets/arrow.png'
import hero from '../assets/hero_image.png'

const Hero = () => {
  return (
    <div className='hero' >
        <div className='hero-left' >
            <h2>NEW CLOTHES FOR YOU</h2>
            <div>
                <div className='hand' >
                    <p>NEW</p>
                    <img src={hand} />
                </div>
                <p>COLLECTION</p>
                <p>FOR EVERYONE</p>
            </div>
            <div className='hero-l' >
                <div>LATEST COLLECTION</div>
                <img  src={arrow} />
            </div>
        </div> 
        <div className='hero-r' >
            <img src={hero} />
        </div>
    </div>
  )
}

export default Hero