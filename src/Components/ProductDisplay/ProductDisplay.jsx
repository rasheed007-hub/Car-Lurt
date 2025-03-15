import React from 'react'
import './ProductDisplay.css'
import full_star from '../Assets/images (2).png'
import no_star from '../Assets/free-star-icon-984-thumb.png'


const ProductDisplay = (props) => {
    const {product} = props;
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
                <img src={full_star} alt="" />
                <img src={full_star} alt="" />
                <img src={full_star} alt="" />
                <img src={full_star} alt="" />
                <img src={no_star} alt="" />
                <p>(144)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-discription">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur sed ullam quod nostrum id qui, blanditiis repellat sint ipsum a eius, cupiditate veritatis laboriosam animi, velit temporibus facere nesciunt tempore?
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-s">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXl</div>
                </div>
            </div>
            <button>ADD TO CART</button>
            
        </div>
    </div>
  )
}

export default ProductDisplay