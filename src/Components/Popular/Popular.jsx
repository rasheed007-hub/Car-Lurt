import React from 'react'
import './Popular.css'
import data_products from '../Assets/Data'
import Item from '../Item/Item'

const Popular = () => {
  return (
    <div className='popular'>
        <h1>POPULAR IN SALES</h1>
        <hr />
        <div className="popular_items">
            {data_products.map((item, i)=>{
                return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular