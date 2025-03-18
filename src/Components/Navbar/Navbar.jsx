import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

// import logo from '../Assets/logo.png';
import cart_icon from '../Assets/shopping-cart.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/1123247-200.png'

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems}= useContext(ShopContext)
    const menuRef = useRef()

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.toggle.classList.toggle('open');
    }

    return (
        <div className='nav'>
            <div className='navbar'>
            <div className="nav-logo">
               <p>CAR LURT</p>
            </div>
            <img className='nav_dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => { setMenu("shop") }}>
                    <Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>
                    {menu === "shop" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("sales") }}>
                    <Link style={{ textDecoration: 'none' }} to='/sales'>Sales</Link>
                    {menu === "sales" ? <hr /> : <></>}
                </li>
                <li onClick={() => { setMenu("rents") }}>
                    <Link style={{ textDecoration: 'none' }} to='/rents'>Rents</Link>
                    {menu === "rents" ? <hr /> : <></>}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to='/login'><button>Login</button></Link>
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>
            </div>
        </div>
        </div>
    );
};

export default Navbar;