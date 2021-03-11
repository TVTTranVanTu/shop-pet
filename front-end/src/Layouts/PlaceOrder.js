import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CheckoutSteps from '../Components/CheckoutSteps';
import { Link } from 'react-router-dom';
import { removeFromCart } from '../Actions/CartActions';
import { ORDER_CREATE_RESET } from '../Constants/OrderConstants';


import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import { createOrder } from '../Actions/OrderActions';
function PlaceOrder(props) {
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);

    if (!cart.paymentMethod) {
        props.history.push('/payment');
    }
    console.log(cart);
    const orderCreate = useSelector(state => state.orderCreate);
    const { loading, success, error, order } = orderCreate;

    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    }



    cart.subPrices = cart.cartItems.reduce((a, b) => a + b.price * b.qty, 0);
    cart.shipPrice = cart.subPrices * 0.015;
    cart.subTotal = cart.subPrices + cart.shipPrice;

    const placeOrderHandler = () => {
        dispatch(createOrder({ ...cart, orderItems: cart.cartItems }));
    }

    useEffect(() => {
        if (success) {
            props.history.push(`/`);
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [dispatch, order, props.history, success])
    return (
        <div className="place__order">
            <div className="container">
                <CheckoutSteps step1 step2 step3 step4></CheckoutSteps>
                <h1>Tiến hành đặt hàng</h1>
                <div className="place-order__content">
                    <div className="cart__content">
                        <div className="cart__shipping box">
                            <h2>Thông tin</h2>
                            <p>
                                <strong>Họ và tên:</strong>{cart.shippingAddress.fullName}<br />
                                <strong>Địa chỉ:</strong>{cart.shippingAddress.address}<br />
                                <strong>Mã bưu điện:</strong>{cart.shippingAddress.postalCode}<br />
                                <strong>Tỉnh / Thành phố:</strong>{cart.shippingAddress.city}<br />
                                <strong>Quấc gia:</strong>{cart.shippingAddress.country}<br />
                            </p>
                        </div>
                        <div className="cart__payment box">
                            <h2>Phương thức thanh toán</h2>
                            <p>
                                <strong>Phương thức :</strong>{cart.paymentMethod}
                            </p>
                        </div>
                        <div className="cart__product box">
                            <h2>Sản phẩm</h2>
                            {cart.cartItems.map((item) => (
                                <div className="product__item" key={item.product}>
                                    <div className="product__img">
                                        <img src={item.image} alt={item.name} className="img__small"></img>
                                    </div>
                                    <div className="product__name">
                                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    </div>
                                    <div className="product__qty">
                                        <span>Số lượng : &nbsp;</span>
                                        {item.qty}
                                    </div>
                                    <div className="product__price">
                                        Giá :&nbsp;
                                        <span>{item.price}đ</span>
                                    </div>
                                    <div className="remove__button">
                                        <button onClick={() => removeFromCartHandle(item.product)} className="ant-btn ant-btn-primary" type="button" >Xóa</button>
                                    </div>
                                </div>)
                            )}
                        </div>
                    </div>
                    <div className="subtotal__box">
                        <div className="mr__bt">
                            <strong>Tổng giá sản phẩm :</strong>
                            <span>{cart.subPrices} đ</span>
                        </div>
                        <div className="mr__bt">
                            <strong>Phí giao hàng :</strong>
                            <span>{cart.shipPrice} đ</span>
                        </div>
                        <div className="mr__bt">
                            <strong>Tổng giá :</strong>
                            <span className="subtotal">{cart.subTotal} đ</span>
                        </div>
                        <button
                            className="ant-btn ant-btn-primary"
                            type="button"
                            onClick={placeOrderHandler}
                            disabled={cart.cartItems.length === 0} >Đặt hàng</button>
                    </div>
                </div>
                {loading && <LoadingBox></LoadingBox>}
                {error && <MessageBox variant="danger">{error}</MessageBox>}
            </div>
        </div>
    );
}

export default PlaceOrder;