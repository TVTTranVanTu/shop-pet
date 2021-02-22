import React from 'react';
import PetFoodList from '../Components/PetFoodList';
import Slider from '../Components/Slider';
function PetFoodPage(props) {
    return (
        <div>
            <Slider></Slider>
            <PetFoodList></PetFoodList>

        </div>
    );
}

export default PetFoodPage;