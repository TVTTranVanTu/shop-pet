import React from 'react';
import puppy from '../assets/img/puppy.png';
function Product(props) {
    return (
        <div className="product">
            <div className="card">
                <a href="#">
                    <img src={puppy} alt="product"></img>
                </a>
            </div>
        </div>
    );
}

export default Product;