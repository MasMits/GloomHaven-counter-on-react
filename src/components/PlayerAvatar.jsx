import React from 'react';
import player_1 from "../img/PlayerSkin/Player_1.png";
import banner from "../img/PlayerSkin/banner.svg";
import '../styles/PlayerAvatar.css';


const PlayerAvatar = (props) => {
    console.log(props.player.img)

    return (
        <div className="img-container">
            <img id="fourth" src= {props.player.img} alt="img"/>
                <div className="banner">
                    <img src={banner} alt="img"/>
                    </div>
                <div className="name">{props.player.name}</div>
        </div>
    );

};
//props.player.name

export default PlayerAvatar;