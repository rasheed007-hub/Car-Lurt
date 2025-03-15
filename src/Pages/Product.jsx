import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom'
import Breadcrums from '../Components/Breadcrums/Breadcrums';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productID} = useParams()
  const product = all_product.find((e)=>e.id === Number(productID))
  return (
    <div>
        <Breadcrums product={product}/>
    </div>
  )
}

export default Product