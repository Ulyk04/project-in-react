import React from 'react'
import './Popular.css';
import data from '../assets/data';
import Item from '../item/Item'

const Popular = () => {
  return (
    <div className='popular' >
        <h1>POPULAR FOR WOMEN</h1>
        <hr />
        <div className='item' >
            {data.map((item , i) => {
                return <Item key={i} id={item.id} name={item.name} image={item.image} new={item.new_price} old={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular