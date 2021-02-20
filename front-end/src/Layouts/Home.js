import React from 'react';
import ChildPets from '../Components/ChildPets';
import DomesticPets from '../Components/DomesticPets';
import Slider from '../Components/Slider';

function Home(props) {
    return (
        <div className="home">
            <Slider></Slider>
            <ChildPets></ChildPets>
            <DomesticPets></DomesticPets>
        </div>
    );
}

export default Home;