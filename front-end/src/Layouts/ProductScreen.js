import React from 'react';
import { Link } from 'react-router-dom';
import Rating from '../Components/Rating';
import data from '../Data/PetFoodData';
function ProductScreen(props) {
    const product = data.products.find((x) => x._id === props.match.params.id);
    if (!product) {
        return <div>Product not found</div>
    }
    return (
        <div className="product__screen">
            <div className="container">
                <div className="product__container">
                    <Link to="/pet-food" className="back-to-result">
                        <i className="fas fa-backward"></i>
                    Trở lại
                    </Link>
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
                                    <div className="qty pd__bottom">
                                        Số lượng : &nbsp;
                                        <span>{product.countInStock}</span>
                                    </div>
                                    <div className="price pd__bottom">
                                        Tổng giá :&nbsp;
                                        <span>{product.price}đ</span>
                                    </div>

                                    <button type="button" className="ant-btn ant-btn-primary">Thêm vào giỏ hàng</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductScreen;