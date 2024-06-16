import React from 'react'
import './Item.css'



const Item = (props) => {
  return (
    <div className='item' >
        <img src={props.image} />
        <p>{props.name}</p>
        <div className='prices'>
            <div className='new' >
                {props.new_price}
            </div>
            <div className='old' >
                {props.old_price}
            </div>
        </div>
    </div>
  )
}

export default Item