import React from 'react';
import './Header.css';
const Header = () => {
    return (
        <div>
            <nav className="menu a">
                <a href="/home"> Home</a>
                <a href="/countries"> Countries</a>
                <a href="/about"> About Us</a>
                <a href="/contact"> Contact</a>
            </nav>
            <p className="sub-title"> Visit us</p>
        </div>
    );
};

export default Header;