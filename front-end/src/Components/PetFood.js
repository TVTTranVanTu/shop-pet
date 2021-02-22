import React from 'react';
import Rating from './Rating';
import { Link } from 'react-router-dom';
function PetFood(props) {
    const { product } = props;
    return (
        <div className="pet__food" key={product._id}>
            <div className="box__image">
                <Link to={`/product/${product._id}`}>
                    <img src={product.image} alt="banh"></img>
                </Link>
            </div>
            <div className="box__text">
                <div className="title__box">
                    <Link to={`/product/${product._id}`}>
                        <h2>{product.name}</h2>
                    </Link>
                </div>
                <div className="price__box">
                    <div className="price">
                        {product.price}đ
                        </div>
                    <Rating rating={product.rating} numReviews={product.numReviews}></Rating>
                </div>
            </div>
        </div>

    );
}

export default PetFood;