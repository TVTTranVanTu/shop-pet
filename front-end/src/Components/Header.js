import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Header(props) {
    return (

        <div className="header__navbar">
            <div className="container">
                <nav className="navbar">
                    <ul>
                        <li className="active">
                            <Link to="/">
                                <i className="fas fa-paw"></i>
                                <span>Thú cưng</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pet-food">
                                <i className="fas fa-bone"></i>
                                <span>Thức ăn</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/pet-heart">
                                <i className="fas fa-heartbeat"></i>
                                <span>Thú Y</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/handbook">
                                <i className="fas fa-book"></i>
                                <span>Cẩm nang</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about">
                                <i className="fas fa-info-circle"></i>
                                <span>Thông tin</span>
                            </Link>
                        </li>
                        <li>
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