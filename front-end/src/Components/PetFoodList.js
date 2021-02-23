import React, { useEffect } from 'react';
import PetFood from './PetFood';
import LoadingBox from './LoadingBox';
import MessageBox from './MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listPetFood } from '../Actions/PetFoodActions';
function PetFoodList(props) {
    const dispatch = useDispatch();
    const petfoodList = useSelector((state) => state.petfoodList);
    const { loading, error, products } = petfoodList;
    useEffect(() => {
        dispatch(listPetFood());
    }, []);
    return (

        <div className="pet-food__list">
            <div className="container">
                {loading ? (<LoadingBox></LoadingBox>)
                    :
                    error ? (<MessageBox variant="danger">{error}</MessageBox>)
                        : (
                            <div>
                                {products.length === 0 && <MessageBox>No Product Found</MessageBox>}
                                <h2 className="title">THỨC ĂN DÀNH CHO THÚ CƯNG</h2>
                                <div className="list__product">
                                    {products.map((product) => (
                                        <PetFood key={product._id} product={product}></PetFood>
                                    ))}
                                </div>
                            </div>)}
            </div>
        </div>

    );
}

export default PetFoodList;