import React, { useState } from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Header(props) {
    const [active, setActive] = useState('pet');

    return (

        <div className="header__navbar">
            <div className="container">
                <nav className="navbar">
                    <ul>
                        <li className={active === 'pet' ? `active` : ``} onClick={() => setActive('pet')}>
                            <Link to="/">
                                <i className="fas fa-paw"></i>
                                <span>Thú cưng</span>
                            </Link>
                        </li>
                        <li className={active === 'food' ? `active` : ``} onClick={() => setActive('food')}>
                            <Link to="/pet-food">
                                <i className="fas fa-bone"></i>
                                <span>Thức ăn</span>
                            </Link>
                        </li>
                        <li className={active === 'heart' ? `active` : ``} onClick={() => setActive('heart')}>
                            <Link to="/pet-heart">
                                <i className="fas fa-heartbeat"></i>
                                <span>Thú Y</span>
                            </Link>
                        </li>

                        <li className={active === 'handbook' ? `active` : ``} onClick={() => setActive('handbook')}>
                            <Link to="/handbook">
                                <i className="fas fa-book"></i>
                                <span>Cẩm nang</span>
                            </Link>
                        </li>
                        <li className={active === 'about' ? `active` : ``} onClick={() => setActive('about')}>
                            <Link to="/about">
                                <i className="fas fa-info-circle"></i>
                                <span>Thông tin</span>
                            </Link>
                        </li>
                        <li className={active === 'cart' ? `active` : ``} onClick={() => setActive('cart')}>
                            <Link to="/cart">
                                <i className="fas fa-shopping-cart"></i>
                                <span>Giỏ hàng</span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>

    );
}

export default Header;