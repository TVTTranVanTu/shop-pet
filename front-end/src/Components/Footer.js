import React from 'react';
import appStore from '../assets/svg/appStore.png';
import googlePlay from '../assets/svg/googlePlay.png';
function Footer(props) {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__top">
                    <div className="footer__nav">
                        <a href="#">Về PetShop</a>
                        <a href="#">Liên hệ</a>
                        <a href="#">Điều khoản sử dụng</a>
                        <a href="#">Quy chế hoạt động</a>
                        <a href="#">Blog thú cưng</a>
                        <a href="#">Hợp tác</a>
                    </div>
                    <div className="footer__app">
                        <a href="#">
                            <img src={appStore} alt="appstore"></img>
                        </a>
                        <a href="#">
                            <img src={googlePlay} alt="googleStore"></img>
                        </a>
                    </div>
                    <div className="footer__contact">
                        <p className="semibold">Công ty TNHH PETSHOP</p>
                        <p className="semibold">Ngô Sỹ Liên ,Liên Chiểu ,Đà Nẵng</p>
                        <p>Số tài khoản : 01001101010101</p>
                        <p>Ngân hàng Vietcombank</p>
                        <p>Chi nhánh Liên Chiểu</p>
                        <p>
                            Email:&nbsp;
                            <a href="#" className="semibold">d38tranvantu@gmail.com</a>
                        </p>
                        <p>
                            Hotline:&nbsp;
                            <a href="#" className="green-1 semibold">0396998025</a>
                        </p>
                    </div>
                    <div className="footer__form">
                        <p className="mb15">
                            <strong>Petshop &nbsp;</strong>
                            luôn lắng nghe những thắc mắc và giải đáp sớm nhất cho quý khách hàng
                        </p>
                        <form className="ant-form ant-form-horizontal d-flex mb15">
                            <div className="ant-row ant-form-item mb0 flex1 ant-form-item-has-success">
                                <div className="ant-col ant-form-item-control">
                                    <div className="ant-form-item-control-input">
                                        <div className="ant-form-item-control-input-content">
                                            <input type="text" className="ant-input form-control" placeholder="Email của bạn" />
                                        </div>
                                    </div>
                                    <div className="ant-form-item-explain ant-form-item-explain-success">
                                        <div role="alert">
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="ant-btn ant-btn-primary">
                                <span>Đăng ký</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <p className="footer__copyright">Bản quyền 	&copy; Trần Văn Tú</p>
                    <div className="footer__social">
                        <a href="#">
                            <i className="fab fa-facebook-square"></i>
                            <span>Facebook</span>
                        </a>
                        <a href="#">
                            <i className="fab fa-instagram"></i>
                            <span>Instagram</span>
                        </a>
                        <a href="#">
                            <i className="fab fa-blogger"></i>
                            <span>Blog</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;