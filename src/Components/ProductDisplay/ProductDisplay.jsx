import React, { useContext } from 'react'
import './ProductDisplay.css'
import full_star from '../Assets/images (2).png'
import no_star from '../Assets/free-star-icon-984-thumb.png'
import { ShopContext } from '../../Context/ShopContext'


const ProductDisplay = (props) => {

    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img-main">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img className='star' src={full_star} alt="" />
                <img className='star' src={full_star} alt="" />
                <img className='star' src={full_star} alt="" />
                <img className='star' src={full_star} alt="" />
                <img className='star' src={no_star} alt="" />
                <p>(144)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-discription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sed ullam quod nostrum id qui, blanditiis repellat sint ipsum a eius, cupiditate veritatis laboriosam animi, velit temporibus facere nesciunt tempore?
            </div>
            <div className="productdisplay-right-color">
                <h1>Colors</h1>
                <div className="productdisplay-right-colors">
                    <div>Black</div>
                    <div>Blue</div>
                    <div>Gold</div>
                    <div>Silver</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
        </div>
    </div>
  )
}

export default ProductDisplay