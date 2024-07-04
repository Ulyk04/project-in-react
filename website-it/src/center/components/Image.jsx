import React from 'react';
import './Image.css';

const Image = ({iso , name}) => {
  return (
    <div className='image-container' >
        <img src={iso} alt="" className='iso' />
        <div className='caption' > {name} </div>
    </div>
  )
}

export default Image;