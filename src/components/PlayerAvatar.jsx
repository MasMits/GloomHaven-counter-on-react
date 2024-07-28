import React, {useContext} from 'react';
import banner from "../img/PlayerSkin/banner.svg";
import '../styles/PlayerAvatar.css';
import {PlayerContext} from "./Player"


const PlayerAvatar = () => {
    const context = useContext(PlayerContext);

    const commonStyles = {
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        borderRadius: '50%',
        boxShadow: `0 0 10px 5px ${context.player.color}` // Замените #ffcc00 на желаемый цвет
    };

    const containerStyles = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // или установите нужную ширину контейнера
        height: '100%' // или установите нужную высоту контейнера
    };

    const imageStyle = context.player.life < 1
        ? {...commonStyles, filter: 'grayscale(100%)'}
        : commonStyles;

    return (
        <div className="img-container" draggable={false}>
            {
                <div style={containerStyles}>
                    <img
                        id="fourth"
                        src={context.player.img}
                        alt="img"
                        draggable={false}
                        style={imageStyle}
                    />
                </div>

            }
            <div className="banner">
                <img src={banner} alt="img" draggable={false}/>
            </div>
            <div className="name" draggable={false}>{context.player.name}</div>
        </div>
    );

};

export default PlayerAvatar;