import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { signin } from '../Actions/UserActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
function SingIn(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const redirect = props.location.search
        ? props.location.search.split('=')[1]
        : '/';
    const userSignin = useSelector((state) => state.userSignin);
    const { userInfo, loading, error } = userSignin;

    const dispatch = useDispatch();
    const submidHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
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
            <div className="signin">
                <div className="modal__header">
                    <h1>Đăng nhập</h1>
                    <button className="close__box" onClick={back}>
                        <svg viewBox="64 64 896 896" focusable="false" data-icon="close" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                            <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 00203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                        </svg>
                    </button>
                </div>
                <div>
                    <form className="form" onSubmit={submidHandler}>
                        {error && (<MessageBox variant="danger">{error}</MessageBox>)}
                        <div className="mr__bt">
                            <label htmlFor="email">Email hoặc tài khoản</label>
                            <input className="ant-input form-control" type="email" id="email" placeholder="Nhập vào email hoặc tên tài khoản ..." required
                                onChange={e => setEmail(e.target.value)}></input>
                        </div>
                        <div className="mr__bt">
                            <label htmlFor="password">Mật khẩu</label>
                            <input className="ant-input form-control" type="password" id="password" placeholder="Nhập vào mật khẩu ..." required
                                onChange={e => setPassword(e.target.value)}>
                            </input>
                        </div>
                        <button className="mr__bt ant-btn ant-btn-primary btn btn_orange w100" type="submit">Đăng nhập</button>
                        <div className="mr__bt">
                            <div className="formLogin__or">
                                <span>Hoặc</span>
                            </div>
                            <div className="btn__group">
                                <button type="button" className="btn btn_outline w100 mb15">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.3333 16C15.5101 16 15.6797 15.9298 15.8047 15.8047C15.9298 15.6797 16 15.5101 16 15.3333V0.666667C16 0.489856 15.9298 0.320286 15.8047 0.195262C15.6797 0.0702379 15.5101 0 15.3333 0L0.666667 0C0.489856 0 0.320286 0.0702379 0.195262 0.195262C0.0702379 0.320286 0 0.489856 0 0.666667L0 15.3333C0 15.5101 0.0702379 15.6797 0.195262 15.8047C0.320286 15.9298 0.489856 16 0.666667 16H15.3333Z" fill="#39579A"></path>
                                        <path d="M8.50671 16.0003V9.66699H6.33337V7.33366H8.50671V5.60866C8.50671 3.54199 9.76871 2.41699 11.612 2.41699C12.4954 2.41699 13.254 2.48266 13.4754 2.51199V4.67199L12.1967 4.67233C11.194 4.67233 11 5.14899 11 5.84799V7.33366H13.3334L13 9.66699H11V16.0003H8.50671Z" fill="white"></path>
                                    </svg>
                                    <span>Đăng nhập bằng Facebook</span>
                                </button>
                                <button type="button" className="btn btn_outline w100 mb15">
                                    <svg width="18" height="18" xmlns="http://www.w3.org/2000/svg">
                                        <g fill="#000" fillRule="evenodd">
                                            <path d="M9 3.48c1.69 0 2.83.73 3.48 1.34l2.54-2.48C13.46.89 11.43 0 9 0 5.48 0 2.44 2.02.96 4.96l2.91 2.26C4.6 5.05 6.62 3.48 9 3.48z" fill="#EA4335"></path>
                                            <path d="M17.64 9.2c0-.74-.06-1.28-.19-1.84H9v3.34h4.96c-.1.83-.64 2.08-1.84 2.92l2.84 2.2c1.7-1.57 2.68-3.88 2.68-6.62z" fill="#4285F4"></path>
                                            <path d="M3.88 10.78A5.54 5.54 0 0 1 3.58 9c0-.62.11-1.22.29-1.78L.96 4.96A9.008 9.008 0 0 0 0 9c0 1.45.35 2.82.96 4.04l2.92-2.26z" fill="#FBBC05"></path>
                                            <path d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.84-2.2c-.76.53-1.78.9-3.12.9-2.38 0-4.4-1.57-5.12-3.74L.97 13.04C2.45 15.98 5.48 18 9 18z" fill="#34A853"></path>
                                            <path fill="none" d="M0 0h18v18H0z"></path></g></svg>
                                    <span>Đăng nhập bằng Google</span>
                                </button>
                            </div>
                        </div>
                        <div className="mr__bt">
                            <p>Bạn chưa có tài khoản ? &nbsp;
                        <span>
                                    <Link to={`/register?redicrect=${redirect}`}>Đăng ký</Link>
                                </span>
                            </p>
                            <p>Bạn là khách hàng doanh nghiệp ? &nbsp;
                        <span>Đăng ký tại đây</span>
                            </p>
                        </div>
                    </form>

                </div>
            </div>
        </div>


    );
}

export default SingIn;