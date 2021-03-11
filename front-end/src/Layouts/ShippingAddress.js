import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../Actions/CartActions';
import CheckoutSteps from '../Components/CheckoutSteps';

function ShippingAddress(props) {
    const userSignin = useSelector(state => state.userSignin);
    const { userInfo } = userSignin;
    if (!userInfo) {
        props.history.push("/signin");
    }
    const cart = useSelector((state) => state.cart);
    const { shippingAddress } = cart;

    const [fullName, setFullName] = useState(shippingAddress.fullName);
    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const dispatch = useDispatch();
    const submidHandle = (e) => {
        e.preventDefault();
        dispatch(
            saveShippingAddress({ fullName, address, city, postalCode, country })
        );
        props.history.push('/payment');
    }

    return (
        <div className="shipping__address">
            <div className="container">
                <CheckoutSteps step1 step2></CheckoutSteps>
                <h1>Địa chỉ giao hàng</h1>
                <form className="form" onSubmit={submidHandle}>
                    <div className="mr__bt">
                        <label htmlFor="fullname">Họ tên</label>
                        <input
                            type="text"
                            className="ant-input form-control"
                            id="fullName"
                            placeholder="Tên đầy đủ ..."
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            required></input>
                    </div>
                    <div className="mr__bt">
                        <label htmlFor="address">Địa chỉ</label>
                        <input
                            type="text"
                            className="ant-input form-control"
                            id="address"
                            placeholder="Địa chỉ giao hàng ..."
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            required></input>
                    </div>
                    <div className="mr__bt">
                        <label htmlFor="city">Thành phố</label>
                        <input
                            type="text"
                            className="ant-input form-control"
                            id="city"
                            placeholder="Thành phố ..."
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            required></input>
                    </div>
                    <div className="mr__bt">
                        <label htmlFor="postalCode">Mã bưu điện</label>
                        <input
                            type="text"
                            className="ant-input form-control"
                            id="postalCode"
                            placeholder="Mã bưu điện ..."
                            value={postalCode}
                            onChange={(e) => setPostalCode(e.target.value)}
                            required></input>
                    </div>
                    <div className="mr__bt">
                        <label htmlFor="country">Quấc gia</label>
                        <input
                            type="text"
                            className="ant-input form-control"
                            id="country"
                            placeholder="Quấc gia..."
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                            required></input>
                    </div>
                    <div className="btn__r">
                        <button className="ant-btn ant-btn-primary btn btn_orange w100" type="submit">Tiếp tục</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ShippingAddress;