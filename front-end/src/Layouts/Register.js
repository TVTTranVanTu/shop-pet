import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { register } from '../Actions/UserActions';

import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
function Register(props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';

    const userRegister = useSelector((state) => state.userRegister);
    const { userInfo, loading, error } = userRegister;

    const dispatch = useDispatch();
    const submidHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert('Mật khẩu không khớp');
        } else {
            dispatch(register(name, email, password));
        }
    }

    const back = () => {
        props.history.push('/');
    }
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
    }, [props.history, redirect, userInfo]);

    return (
        <div>
            {loading && (<LoadingBox></LoadingBox>)}

            <div className="register">
                <div className="modal__header">
                    <h1>Đăng ký</h1>
                    <button className="close__box" onClick={back} >
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <form className="form" onSubmit={submidHandler}>
                        {error && (<MessageBox variant="danger">{error}</MessageBox>)}
                        <div className="mr__bt">
                            <label htmlFor="name">Name</label>
                            <input className="ant-input form-control" type="text" id="email" placeholder="Nhập vào tên đăng nhập ..." required
                                onChange={e => setName(e.target.value)}></input>
                        </div>
                        <div className="mr__bt">
                            <label htmlFor="email">Email</label>
                            <input className="ant-input form-control" type="email" id="email" placeholder="Nhập vào email ..." required
                                onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mr__bt">
                            <label htmlFor="password">Mật khẩu</label>
                            <input className="ant-input form-control" type="password" id="password" placeholder="Nhập vào mật khẩu ..." required
                                onChange={e => setPassword(e.target.value)}>
                            </input>
                        </div>
                        <div className="mr__bt">
                            <label htmlFor="confirmPassword">Nhập lại mật khẩu</label>
                            <input className="ant-input form-control" type="password" id="confirmPassword" placeholder="Nhập lại mật khẩu ..." required
                                onChange={e => setConfirmPassword(e.target.value)}>
                            </input>
                        </div>
                        <button className="mr__bt ant-btn ant-btn-primary btn btn_orange w100" type="submit">Đăng ký</button>

                        <div className="mr__bt">
                            <p>Bạn đã có tài khoản ? &nbsp;
                                <span>
                                    <Link to={`/signin?redirect=${redirect}`}>Đăng Nhập</Link>
                                </span>
                            </p>
                            <p>Tiếp tục nghĩa là bạn đồng ý với các <a href="#">Điều khoản và Điều kiện</a>,
                     cũng như các <a href="#">Chính sách bảo mật</a> của PET-SHOP.
                    </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
}

export default Register;