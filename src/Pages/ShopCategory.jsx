import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import Item from '../Components/Item/Item';
import dropdown from '../Components/Assets/1123247-200.png';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext); 
  return (
    <div className='shop-category'>
        <img className='shopcategory-banner' src={props.banner} alt="" />
        <div className="shopcategory-indexSort">
          <p>
            <span>Showing 1-12</span> out of {all_product.length} results
          </p>
          <div className="shopcategory-sort">
            sort by <img src={dropdown} alt="" />
          </div>
        </div>
        <div className="shopcategory-products">
          {all_product.map((item, i) => {
            if (props.category === item.category) {
              return <Item key={i} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price} />;
            } else {
              return null;
            }
          })}
        </div>
        <div className="shopcategoty-loadmore">
          Explore More
        </div>
    </div>
  );
};

export default ShopCategory;