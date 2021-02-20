import React from 'react';
import ca from '../assets/img/petvn/ca.jpg';
import cat from '../assets/img/petvn/cat.jpg';
import chim from '../assets/img/petvn/chim.jpg';
import dog from '../assets/img/petvn/dog.jpg';
import hamster from '../assets/img/petvn/hamster.jpg';
import longhine from '../assets/img/petvn/longhine.jpg';
import soc from '../assets/img/petvn/soc.jpg';
import socbayuc from '../assets/img/petvn/socbayuc.jpg';
import tho from '../assets/img/petvn/tho.jpg';
import rua from '../assets/img/petvn/rua.png';
import tackehoa from '../assets/img/petvn/tacke.jpg';
function DomesticPets(props) {
    return (
        <div className="domesticpets">
            <div className="container">
                <h2 className="text-center mb30">GIỐNG THÚ CƯNG PHỔ BIẾN TRONG NƯỚC</h2>
                <div className="grid-container">
                    <div className="item1">
                        <a href="#">
                            <img src={dog} alt="dog"></img>
                            <div className="domestic-pet__name">
                                <h3>Chó</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item2">
                        <a href="#">
                            <img src={hamster} alt="hamster"></img>
                            <div className="domestic-pet__name">
                                <h3>CHuột hamster</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item3">
                        <a href="#">
                            <img src={tho} alt="tho"></img>
                            <div className="domestic-pet__name">
                                <h3>Thỏ</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item4">
                        <a href="#">
                            <img src={cat} alt="cat"></img>
                            <div className="domestic-pet__name">
                                <h3>Mèo</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item5">
                        <a href="#">
                            <img src={chim} alt="chim"></img>
                            <div className="domestic-pet__name">
                                <h3>Chim</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item6">
                        <a href="#">
                            <img src={ca} alt="ca"></img>
                            <div className="domestic-pet__name">
                                <h3>Cá cảnh</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item7">
                        <a href="#">
                            <img src={longhine} alt="lon ghi ne"></img>
                            <div className="domestic-pet__name">
                                <h3>Lợn ghi nê</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item8">
                        <a href="#">
                            <img src={soc} alt="soc"></img>
                            <div className="domestic-pet__name">
                                <h3>Sóc</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item9">
                        <a href="#">
                            <img src={tackehoa} alt="tac ke hoa"></img>
                            <div className="domestic-pet__name">
                                <h3>Tắc kè hoa</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item10">
                        <a href="#">
                            <img src={rua} alt="rua"></img>
                            <div className="domestic-pet__name">
                                <h3>Rùa</h3>
                            </div>
                        </a>
                    </div>
                    <div className="item11">
                        <a href="#">
                            <img src={socbayuc} alt="soc bay uc"></img>
                            <div className="domestic-pet__name">
                                <h3>Sóc bay úc</h3>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DomesticPets;