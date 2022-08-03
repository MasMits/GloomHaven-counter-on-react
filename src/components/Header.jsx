import React from 'react';
import '../styles/Header.css';
import safe from "../img/interface/header/safe.svg";
import map from "../img/interface/header/map.svg";
import refreshing from "../img/interface/header/refreshing.svg";




const Header = (props) => {
    return (
        <div className="header">
            <div className="header-text-container">
                <div className="header-text">
                    Guardians of the Warden Mountains
                </div>
            </div>
            <div className="header-button-container">
                <div className="header__icon">
                    <button><img className="history" src= {map} alt="img"/></button>
                </div>
                <div className="header__icon">
                    <button onClick={() => props.method(true)}><img className="history" src= {safe} alt="img"/></button>
                </div>
                <div className="header__icon">
                    <button><img className="history" src= {refreshing} alt="img"/></button>
                </div>
            </div>
        </div> );
};


export default Header;