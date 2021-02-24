import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailPetFood } from '../Actions/PetFoodActions';
import LoadingBox from '../Components/LoadingBox';
import MessageBox from '../Components/MessageBox';
import Rating from '../Components/Rating';
function ProductScreen(props) {
    const dispatch = useDispatch();
    const [qty, setQty] = useState(1);
    const productId = props.match.params.id;
    const petfoodDetail = useSelector((state) => state.petfoodDetail);
    const { loading, error, product } = petfoodDetail;
    useEffect(() => {
        dispatch(detailPetFood(productId));
    }, [dispatch, productId]);
    const AddToCardHandle = () => {
        props.history.push(`/cart/${productId}?qty=${qty}`);
    }
    return (
        <div className="product__screen">
            <div className="container">
                <div className="product__container">
                    <Link to="/pet-food" className="back-to-result">
                        <i className="fas fa-backward"></i>
                    Trở lại
                    </Link>
                    {loading ? (<LoadingBox></LoadingBox>)
                        :
                        error ? (<MessageBox variant="danger">{error}</MessageBox>)
                            : (
                                <div className="product__main">
                                    <div className="product-gallery">
                                        <img src={product.image} alt="product"></img>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-summary">
                                            <h1 className="product__title">{product.name}</h1>
                                            <span>Thương hiệu &nbsp;
                                            <a href="#">{product.brand}</a>
                                            </span>
                                            <div className="product__rating">
                                                <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                                            </div>
                                            <div className="product__price">
                                                Giá : <span>{product.price}đ</span>
                                            </div>
                                            <div className="description">
                                                <p className="state">{product.description}</p>
                                                <p>Số lượng : &nbsp;{product.countInStock}</p>
                                            </div>
                                            <div className="buy__box">
                                                {product.countInStock > 0 ? (
                                                    <div className="qty pd__bottom">
                                                        <span className="buy-box__title">Số lượng : &nbsp;</span>
                                                        <select value={qty}
                                                            onChange={(e) => setQty(e.target.value)}>
                                                            {[...Array(product.countInStock).keys()].map(
                                                                (x) => (
                                                                    <option key={x + 1} value={x + 1}>{x + 1}</option>
                                                                )

                                                            )}
                                                        </select>
                                                    </div>
                                                ) : (<div className="qty__noon pd__bottom">Hết hàng</div>)}

                                                <div className="price pd__bottom">
                                                    <span className="buy-box__title"> Tổng giá :&nbsp;</span>
                                                    {product.countInStock > 0 ? (
                                                        <span className="qty__price">{qty * product.price}đ</span>
                                                    ) : (<span className="qty__price">0đ</span>)}

                                                </div>

                                                <button onClick={AddToCardHandle} type="button" className="ant-btn ant-btn-primary" disabled={product.countInStock === 0}>Thêm vào giỏ hàng</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>)}
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;