import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { savePaymentMethod } from '../Actions/CartActions';
import CheckoutSteps from '../Components/CheckoutSteps';

function PaymentPage(props) {
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    const { shippingAddress } = cart;

    if (!shippingAddress.address) {
        props.history.push('/shipping');
    }
    const [paypal, setPaypal] = useState('Momo');


    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(savePaymentMethod(paypal));
        props.history.push('/placeorder');
    }

    return (
        <div className="payment">
            <div className="container">
                <CheckoutSteps step1 step2 step3></CheckoutSteps>
                <h1>Phương thức thanh toán</h1>
                <form className="form" onSubmit={submitHandler}>
                    <div className="main-container">
                        <div className="payment__method">
                            <div id="automation-payment-method-item-121" className="pay-method-item clearfix automation-payment-method-item ">
                                <img className="icon" src="https://img.alicdn.com/tfs/TB17BAYE7L0gK0jSZFAXXcA9pXa-80-80.png" />
                                <div>
                                    <div className="title">Ví ZaloPay</div>
                                    <div className="subtitle">Bạn phải có tài khoản ZaloPay</div>
                                </div>
                            </div>
                            <input
                                type="radio"
                                id="paypal"
                                value="ZaloPay"
                                name="paymentMethod"
                                required
                                onChange={(e) => setPaypal(e.target.value)}>
                            </input>
                        </div>
                        <div className="payment__method">
                            <div id="automation-payment-method-item-121" className="pay-method-item clearfix automation-payment-method-item ">
                                <img className="icon" src="https://img.alicdn.com/tfs/TB1L1Felmf2gK0jSZFPXXXsopXa-160-160.png" />
                                <div>
                                    <div className="title">Ví MoMo</div>
                                    <div className="subtitle">Bạn phải có tài khoản MoMo</div>
                                </div>
                            </div>
                            <input
                                type="radio"
                                id="paypal"
                                value="Momo"
                                name="paymentMethod"
                                required
                                checked
                                onChange={(e) => setPaypal(e.target.value)}>
                            </input>
                        </div>
                        <div className="payment__method">
                            <div id="automation-payment-method-item-121" className="pay-method-item clearfix automation-payment-method-item ">
                                <img className="icon" src="https://laz-img-cdn.alicdn.com/tfs/TB1ZP8kM1T2gK0jSZFvXXXnFXXa-96-96.png" />
                                <div>
                                    <div className="title">Thanh toán khi nhận hàng</div>
                                    <div className="subtitle">&nbsp;</div>
                                </div>
                            </div>
                            <input
                                type="radio"
                                id="ship"
                                value="Ship"
                                name="paymentMethod"
                                required
                                onChange={(e) => setPaypal(e.target.value)}>
                            </input>
                        </div>
                        <div className="payment__method">
                            <div id="automation-payment-method-item-121" className="pay-method-item clearfix automation-payment-method-item ">
                                <img className="icon" src="https://laz-img-cdn.alicdn.com/tfs/TB1Iey_osKfxu4jSZPfXXb3dXXa-96-96.png" />
                                <div>
                                    <div className="title">Thêm thẻ mới</div>
                                    <div className="subtitle">&nbsp;</div>
                                </div>
                            </div>
                            <input
                                type="radio"
                                id="newcart"
                                value="NewCart"
                                name="paymentMethod"
                                required
                                onChange={(e) => setPaypal(e.target.value)}>
                            </input>
                        </div>
                        <div className="payment__method">
                            <div id="automation-payment-method-item-121" className="pay-method-item clearfix automation-payment-method-item ">
                                <img className="icon" src="https://laz-img-cdn.alicdn.com/tfs/TB1nOISXQcx_u4jSZFlXXXnUFXa-96-96.png" />
                                <div>
                                    <div className="title">Thẻ ATM nội địa / Internet Banking</div>
                                    <div className="subtitle">Thanh toán qua cổng Napas</div>
                                </div>
                            </div>
                            <input
                                type="radio"
                                id="atm"
                                value="ATM"
                                name="paymentMethod"
                                required
                                onChange={(e) => setPaypal(e.target.value)}>
                            </input>
                        </div>
                    </div>
                    <div className="sub__total">
                        <h2>Thông tin đơn hàng</h2>
                        <span>Tổng tiền ({cartItems.reduce((a, b) => a + b.qty, 0)} sản phẩm):</span>
                        <span className="total">
                            {cartItems.reduce((a, b) => a + b.price * b.qty, 0)}đ

                        </span>
                        <button type="submit" className="ant-btn ant-btn-primary">Xác nhận thanh toán</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default PaymentPage;