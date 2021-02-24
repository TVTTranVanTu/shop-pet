import React, { useState } from 'react';
import logo from '../assets/img/icon.png';
import { Link } from 'react-router-dom';
import Modal from 'react-awesome-modal';
import SingIn from '../Layouts/SingIn';
import Register from '../Layouts/Register';


function Topbar(props) {
    const [visible, setVisible] = useState(false);
    const [visibleReg, setVisibleReg] = useState(false);
    const [currency, setCurrency] = useState(false);
    const [language, setLanguage] = useState(false);
    const openVisible = () => {
        setVisible(true);
    }
    const closeVisible = () => {
        setVisible(false);
    }
    const openVisibleReg = () => {
        setVisible(true);
    }
    const closeVisibleReg = () => {
        setVisible(false);
    }
    return (
        <div className="topbar">
            <div className="container">
                <h1 className="topbar__logo">
                    <Link to="/">
                        <img src={logo} alt="logo"></img>
                    </Link>
                </h1>
                <ul className="topbar__list">
                    <li>
                        <a href="#" className="hotline">
                            <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M6.62639 9.37493C5.0992 7.84775 4.75437 6.32056 4.67657 5.70869C4.65483 5.53951 4.71305 5.36984 4.83409 5.24965L6.06997 4.01433C6.25176 3.83264 6.28403 3.54949 6.14776 3.33156L4.18002 0.27608C4.02926 0.0347663 3.71972 -0.0523261 3.46525 0.0749739L0.306319 1.56271C0.10054 1.66404 -0.0204963 1.88268 0.00286762 2.11086C0.168387 3.68329 0.853911 7.54871 4.65257 11.3476C8.45123 15.1466 12.3161 15.8318 13.8894 15.9973C14.1175 16.0207 14.3362 15.8997 14.4375 15.6939L15.9252 12.535C16.0521 12.281 15.9655 11.9723 15.7252 11.8213L12.6698 9.85411C12.452 9.7177 12.1688 9.74973 11.987 9.93135L10.7517 11.1672C10.6315 11.2883 10.4618 11.3465 10.2926 11.3247C9.68076 11.247 8.15357 10.9021 6.62639 9.37493Z" fill="#FF8917">
                                </path>
                                <path d="M12.6907 8.55195C12.3859 8.55195 12.1389 8.30493 12.1389 8.00022C12.1363 5.71595 10.2852 3.86483 8.00095 3.86225C7.69624 3.86225 7.44922 3.61523 7.44922 3.31052C7.44922 3.00581 7.69624 2.75879 8.00095 2.75879C10.8944 2.76198 13.2392 5.10678 13.2424 8.00022C13.2424 8.30493 12.9954 8.55195 12.6907 8.55195Z" fill="#FF8917">
                                </path>
                                <path d="M15.4493 8.55181C15.1446 8.55181 14.8976 8.3048 14.8976 8.00008C14.8933 4.19295 11.8081 1.10772 8.00095 1.10346C7.69624 1.10346 7.44922 0.856442 7.44922 0.55173C7.44922 0.247018 7.69624 0 8.00095 0C12.4173 0.00486512 15.9962 3.58378 16.001 8.00008C16.001 8.14641 15.9429 8.28675 15.8394 8.39021C15.736 8.49368 15.5956 8.55181 15.4493 8.55181Z" fill="#FF8917">
                                </path>
                            </svg>
                            <span>039 699 8025</span>
                        </a>
                    </li>
                    <li>
                        <div className="dropdown currency">
                            <button className="ant-dropdown-trigger dropdown-toggle" onClick={() => setCurrency(!currency)}>
                                <span>VND</span>
                                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgArrow">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.48532 0.242641L4.24268 4.12306L3.51667e-05 0.242641L8.48532 0.242641Z" fill="#878787">
                                    </path>
                                </svg>
                            </button>
                            <div style={{ position: "absolute", top: "0px", left: "0px", width: "100%" }}>
                                <div>
                                    <div className={currency === false ? `ant-dropdown ant-dropdown-placement-bottomLeft ant-dropdown-hidden` : `ant-dropdown ant-dropdown-placement-bottomLeft`} style={{ minWidth: "45px", left: "10px", top: "35px" }}>
                                        <ul className="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical" role="menu" tabIndex="0">
                                            <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child ant-dropdown-menu-item-selected" role="menuitem">
                                                <button className="currency__link">
                                                    <span className="green-1 semibold">VND</span>
                                                    <span>Việt Nam đồng</span>
                                                </button>
                                            </li>
                                            <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child" role="menuitem">
                                                <button className="currency__link">
                                                    <span className="green-1 semibold">USD</span>
                                                    <span>US Dollar</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="dropdown language">
                            <button className="ant-dropdown-trigger dropdown-toggle" onClick={() => setLanguage(!language)}>
                                <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                    <polygon className="flag-red" points="196.641,85.337 0,85.337 0,426.663 196.641,426.663 512,426.663 512,85.337 " ></polygon>
                                    <polygon className="flag-oranger" points="256,157.279 278.663,227.026 352,227.026 292.668,270.132 315.332,339.881 256,296.774 196.668,339.881 219.332,270.132 160,227.026 233.337,227.026 "></polygon>
                                </svg>
                                <span>Tiếng Việt</span>
                                <svg width="9" height="5" viewBox="0 0 9 5" fill="none" xmlns="http://www.w3.org/2000/svg" className="svgArrow">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M8.48532 0.242641L4.24268 4.12306L3.51667e-05 0.242641L8.48532 0.242641Z" fill="#878787">
                                    </path>
                                </svg>
                            </button>
                            <div style={{ position: "absolute", top: "0px", left: "0px", width: "100%" }}>
                                <div>
                                    <div className={language === false ? `ant-dropdown ant-dropdown-placement-bottomLeft ant-dropdown-hidden` : `ant-dropdown ant-dropdown-placement-bottomLeft`} style={{ minWidth: "116px", left: "15px", top: "35px" }}>
                                        <ul className="ant-dropdown-menu ant-dropdown-menu-light ant-dropdown-menu-root ant-dropdown-menu-vertical" role="menu" tabIndex="0">
                                            <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child ant-dropdown-menu-item-selected" role="menuitem">
                                                <button className="language__link">
                                                    <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                                        <polygon points="196.641,85.337 0,85.337 0,426.663 196.641,426.663 512,426.663 512,85.337 " style={{ fill: "rgb(216, 0, 39)" }}>
                                                        </polygon>
                                                        <polygon points="256,157.279 278.663,227.026 352,227.026 292.668,270.132 315.332,339.881 256,296.774 196.668,339.881 219.332,270.132 160,227.026 233.337,227.026 " style={{ fill: "rgb(255, 218, 68)" }}>
                                                        </polygon>
                                                    </svg>
                                                    <span>Tiếng Việt</span>
                                                </button>
                                            </li>
                                            <li className="ant-dropdown-menu-item ant-dropdown-menu-item-only-child" role="menuitem">
                                                <button className="language__link">
                                                    <svg width="25" height="25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xmlSpace="preserve">
                                                        <polygon points="288,85.33 224,85.33 224,223.996 0,223.996 0,287.996 224,287.996 224,426.662 288,426.662 288,287.996 512,287.996 512,223.996 288,223.996 " style={{ fill: "rgb(216, 0, 39)" }}></polygon>
                                                        <polygon points="393.785,315.358 512,381.034 512,315.358 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 	" style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="458.634,426.662 311.652,344.998 311.652,426.662 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 " style={{ fill: "rgb(240, 240, 240)" }}></polygon>
                                                        <polygon points="311.652,315.358 512,426.662 512,395.188 368.307,315.358 " style={{ fill: "rgb(216, 0, 39)" }}></polygon>
                                                        <polygon points="90.341,315.356 0,365.546 0,315.356 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="200.348,329.51 200.348,426.661 25.491,426.661 	" style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="143.693,315.358 0,395.188 0,426.662 0,426.662 200.348,315.358 " style={{ fill: "rgb(216, 0, 39)" }}></polygon>
                                                        <polygon points="118.215,196.634 0,130.958 0,196.634 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 	" style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="53.366,85.33 200.348,166.994 200.348,85.33 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 " style={{ fill: "rgb(240, 240, 240)" }}></polygon>
                                                        <polygon points="200.348,196.634 0,85.33 0,116.804 143.693,196.634 " style={{ fill: "rgb(216, 0, 39)" }}></polygon>
                                                        <polygon points="421.659,196.636 512,146.446 512,196.636 " style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="311.652,182.482 311.652,85.331 486.509,85.331 	" style={{ fill: "rgb(0, 82, 180)" }}></polygon>
                                                        <polygon points="368.307,196.634 512,116.804 512,85.33 512,85.33 311.652,196.634 " style={{ fill: "rgb(216, 0, 39)" }}></polygon>
                                                    </svg>
                                                    <span>English</span>
                                                </button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="topbar__login">
                            <button type="button" className="btn btn_outlineOrange btn_sm formLogin__click" onClick={openVisible}>
                                <span>Đăng nhập</span>
                            </button>
                            <button type="button" className="btn btn_orange btn_sm formLogin__click" onClick={openVisibleReg}>
                                <span className="reg_btn">Đăng ký</span>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
            <Modal visible={visible} width="450px" height="550px" effect="fadeInUp" onClickAway={closeVisible}>
                <div className="modal__header">
                    <h1>Đăng nhập</h1>
                    <button className="close__box" onClick={closeVisible}>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </button>
                </div>
                <SingIn></SingIn>
            </Modal>
            <Modal visible={visible} width="450px" height="550px" effect="fadeInUp" onClickAway={closeVisible}>
                <div className="modal__header">
                    <h1>Đăng ký</h1>
                    <button className="close__box" onClick={closeVisible}>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </button>
                </div>
                <Register></Register>
            </Modal>
        </div>
    );
}

export default Topbar;