import React from 'react';
import ca from '../assets/img/petgg/ca1.jpg';
import cat from '../assets/img/petgg/meo.jpg';
import dog from '../assets/img/petgg/dog.jpg';
import hamster from '../assets/img/petgg/hamster.jpg';
import longhine from '../assets/img/petgg/longhine.jpg';
import nhim from '../assets/img/petgg/nhim.jpg';
import socbayuc from '../assets/img/petgg/socbay.jpg';
import tho from '../assets/img/petgg/tho.jpg';
import rua from '../assets/img/petgg/rua1.jpg';
function ChildPets(props) {
    return (
        <div className="childpets">
            <div className="container">
                <h2 className="text-center mb30">GIỐNG THÚ CƯNG CON NON</h2>
                <div className="grid-container">
                    <div className="item1">
                        <a href="#">
                            <img src={dog} alt="dog"></img>
                            <div className="child-pet__name">
                                <h3>Chó</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item2">
                        <a href="#">
                            <img src={hamster} alt="hamster"></img>
                            <div className="child-pet__name">
                                <h3>Chuột hamster</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item3">
                        <a href="#">
                            <img src={tho} alt="tho"></img>
                            <div className="child-pet__name">
                                <h3>Thỏ</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item4">
                        <a href="#">
                            <img src={cat} alt="cat"></img>
                            <div className="child-pet__name">
                                <h3>Mèo</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item5">
                        <a href="#">
                            <img src={nhim} alt="soc"></img>
                            <div className="child-pet__name">
                                <h3>Nhím</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item6">
                        <a href="#">
                            <img src={rua} alt="rua"></img>
                            <div className="child-pet__name">
                                <h3>Rùa</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item7">
                        <a href="#">
                            <img src={longhine} alt="lon ghi ne"></img>
                            <div className="child-pet__name">
                                <h3>Lợn ghi nê</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item8">
                        <a href="#">
                            <img src={socbayuc} alt="soc"></img>
                            <div className="child-pet__name">
                                <h3>Sóc bay úc</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item9">
                        <a href="#">
                            <img src={ca} alt="ca"></img>
                            <div className="child-pet__name">
                                <h3>Cá cảnh</h3>
                            </div>
                        </a>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ChildPets;