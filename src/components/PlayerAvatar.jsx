import React, {useContext} from 'react';
import banner from "../img/PlayerSkin/banner.svg";
import '../styles/PlayerAvatar.css';
import {PlayerContext} from "./Player"


const PlayerAvatar = () => {
    const context = useContext(PlayerContext);
    return (
        <div className="img-container">
            {
                context.player.life < 1
                ? <img id="fourth" src= {context.player.dark_img} alt="img"/>
                : <img id="fourth" src= {context.player.img} alt="img"/>
            }
                <div className="banner">
                    <img src={banner} alt="img"/>
                    </div>
                <div className="name">{context.player.name}</div>
        </div>
    );

};

export default PlayerAvatar;