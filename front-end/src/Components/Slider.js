import React, { useState } from 'react';
import background from '../assets/img/bg2.jpg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
function Slider(props) {
    const [active, setActive] = useState('pet');
    return (
        <div className="slider">
            <img src={background} alt="background"></img>
            <div className="search__shop">
                <div className="container">
                    <div className="search__body">
                        <ul className="search__tab">
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
                        </ul>
                        <div className="search__main">
                            <div className={active === 'pet' ? `search__pet open` : `search__pet`}>
                                <div className="search__flex">
                                    <div className="search__input">
                                        <p>Nhập vào tên giống hoặc loại thú cưng</p>
                                        <div className="inputInline">
                                            <div className="ant-form-item-control-input-content">
                                                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
                                                    <input placeholder="Nhập tên loại thú cưng bạn muốn tìm" type="text" className="ant-input ant-input-lg" />
                                                    <span className="ant-input-suffix">

                                                        <span role="img" aria-label="search" className="anticon anticon-search">
                                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="search__price">
                                        <p>Mức giá</p>
                                        <select id="price" className="select">
                                            <option >Dưới 500.000đ</option>
                                            <option >500.000đ - 1.000.000đ</option>
                                            <option >Trên 1.000.000đ</option>
                                            <option >Tất cả</option>
                                        </select>
                                    </div>
                                    <div className="search__btn">
                                        <button type="button" className="ant-btn ant-btn-primary ant-btn-lg w100">
                                            <span>Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className={active === 'food' ? `search__food open` : `search__food`}>
                                <div className="search__flex">
                                    <div className="search__input">
                                        <p>Nhập vào tên loại thức ăn ,đồ chơi cho thú cưng của bạn</p>
                                        <div className="inputInline">
                                            <div className="ant-form-item-control-input-content">
                                                <span className="ant-input-affix-wrapper ant-input-affix-wrapper-lg">
                                                    <input placeholder="Nhập tên loại thức ăn, đồ chơi cho thú cưng" type="text" className="ant-input ant-input-lg" />
                                                    <span className="ant-input-suffix">

                                                        <span role="img" aria-label="search" className="anticon anticon-search">
                                                            <svg viewBox="64 64 896 896" focusable="false" data-icon="search" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                                                                <path d="M909.6 854.5L649.9 594.8C690.2 542.7 712 479 712 412c0-80.2-31.3-155.4-87.9-212.1-56.6-56.7-132-87.9-212.1-87.9s-155.5 31.3-212.1 87.9C143.2 256.5 112 331.8 112 412c0 80.1 31.3 155.5 87.9 212.1C256.5 680.8 331.8 712 412 712c67 0 130.6-21.8 182.7-62l259.7 259.6a8.2 8.2 0 0011.6 0l43.6-43.5a8.2 8.2 0 000-11.6zM570.4 570.4C528 612.7 471.8 636 412 636s-116-23.3-158.4-65.6C211.3 528 188 471.8 188 412s23.3-116.1 65.6-158.4C296 211.3 352.2 188 412 188s116.1 23.2 158.4 65.6S636 352.2 636 412s-23.3 116.1-65.6 158.4z">
                                                                </path>
                                                            </svg>
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="search__price">
                                        <p>Loại thú cưng</p>
                                        <select id="price" className="select">
                                            <option >Chó</option>
                                            <option >Mèo</option>
                                            <option >Chim</option>
                                            <option >Tất cả</option>
                                        </select>
                                    </div>
                                    <div className="search__btn">
                                        <button type="button" className="ant-btn ant-btn-primary ant-btn-lg w100">
                                            <span>Tìm kiếm</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Slider;