import React from 'react';
import PetFood from './PetFood';
import PetFoodData from '../Data/PetFoodData';
function PetFoodList(props) {
    const data = PetFoodData;
    return (
        <div className="pet-food__list">
            <div className="container">
                <h2 className="title">THỨC ĂN DÀNH CHO THÚ CƯNG</h2>
                <div className="list__product">
                    {data.products.map((product) => (
                        <PetFood key={product._id} product={product}></PetFood>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PetFoodList;