import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../Actions/CartActions';
import { useDispatch, useSelector } from 'react-redux';
import MessageBox from '../Components/MessageBox';
function Cart(props) {
    const dispatch = useDispatch();
    const productId = props.match.params.id;
    const qty = props.location.search ? Number(props.location.search.split('=')[1]) : 1;
    const cart = useSelector(state => state.cart);
    const { cartItems } = cart;
    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);
    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    }
    const checkoutHandler = () => {
        props.history.push('/signin?redirect=shipping');
    }
    return (
        <div className="cart__screen">
            <div className="container">
                <h1>Giỏ hàng của bạn</h1>
                {cartItems.length === 0 ?
                    (<MessageBox>
                        Chưa có sản phẩm nào .&nbsp;<Link to="/pet-food">Mua hàng</Link>
                    </MessageBox>) : (
                        <div className="list__cartitem">
                            {cartItems.map((item) => (
                                <div className="cart__item" key={item.product}>
                                    <div className="cart__contents">
                                        <div className="cart__img">
                                            <img src={item.image} alt={item.name} className="img__small"></img>
                                        </div>
                                        <div className="cart__name">
                                            <Link to={`/product/${item.product}`}>{item.name}</Link>
                                        </div>
                                        <div className="cart__qty">
                                            <span>Số lượng : &nbsp;</span>
                                            <select value={item.qty}
                                                onChange={(e) => dispatch(addToCart(item.product, Number(e.target.value)))}>
                                                {[...Array(item.countInStock).keys()].map(
                                                    (x) => (
                                                        <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                    )

                                                )}
                                            </select>
                                        </div>
                                        <div className="cart__price">
                                            Giá :&nbsp;
                                        <span>{item.price}đ</span>
                                        </div>
                                        <div className="cart__button">
                                            <button onClick={() => removeFromCartHandle(item.product)} className="ant-btn ant-btn-primary" type="button" >Xóa</button>
                                        </div>
                                    </div>
                                </div>)
                            )}
                        </div>
                    )}
                <div className="cart__bottom">
                    <div className="backto_listfood">
                        <Link to="/pet-food">
                            <i className="fas fa-backward"></i>
                            Tiếp tục mua hàng
                            </Link>
                    </div>
                    <div className="subtotal">
                        <span>
                            Tổng giá&nbsp;
                        ({cartItems.reduce((a, b) => a + b.qty, 0)} sản phẩm) :&nbsp;
                        </span>
                        <span className="sub__total">
                            {cartItems.reduce((a, b) => a + b.price * b.qty, 0)}đ
                        </span>
                        <button type="button" onClick={checkoutHandler} className="ant-btn ant-btn-primary" disabled={cartItems.length === 0}>Tiến hành thanh toán</button>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Cart;