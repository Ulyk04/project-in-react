import React from 'react'
import './Text.css';

const Text = ({h1 , p}) => {
  return (
    <div className='container' >
        <div className='wrapper' >
            <div className='h' >
                <h1>
                    {h1}
                </h1>
            </div>
            <p>
                {p}
            </p>
        </div>
    </div>
  )
}

export default Text