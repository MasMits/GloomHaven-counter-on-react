import React, {useContext} from 'react';
import banner from "../img/PlayerSkin/banner.svg";
import '../styles/PlayerAvatar.css';
import {PlayerContext} from "./Player"


const PlayerAvatar = () => {
    const context = useContext(PlayerContext);
    return (
        <div className="img-container" draggable={false}>
            {
                context.player.life < 1
                ? <img id="fourth" src= {context.player.dark_img} alt="img" draggable={false}/>
                : <img id="fourth" src= {context.player.img} alt="img" draggable={false}/>
            }
                <div className="banner">
                    <img src={banner} alt="img" draggable={false}/>
                    </div>
                <div className="name" draggable={false}>{context.player.name}</div>
        </div>
    );

};

export default PlayerAvatar;