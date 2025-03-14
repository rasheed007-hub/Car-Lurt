import React, { useState } from 'react';
import './Navbar.css';

// import logo from '../Assets/logo.png';
import cart_icon from '../Assets/shopping-cart.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [menu, setMenu] = useState("shop");

    return (
        <div className='navbar'>
            <div className="nav-logo">
                {/* <img src={logo} alt="logo" /> */}
                <p>CAR LURT</p>
            </div>
            <ul className='nav-menu'>
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
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    );
};

export default Navbar;