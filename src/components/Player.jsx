import React, {useState} from 'react';
import PlayerAvatar from "./PlayerAvatar";
import Counter from "./Counter";
import heart from "../img/interface/heart.svg";
import star from "../img/interface/star.svg";

import '../styles/Player.css';
export const PlayerContext = React.createContext();


const Player = (props) => {
    const [player, setPlayer] = useState(props.player);
    const methods = {
        increment: (key) => {
            setPlayer({...player, [key.type]: ++player[key.type]})
        },
        decrement:(key) =>{
            setPlayer({...player, [key.type]: --player[key.type]})
        }
    };

    return (
        <PlayerContext.Provider value={{player, methods}}>
            <div className="player">
                <PlayerAvatar/>
                <Counter type={{type: "life", img: heart}}/>
                <Counter type={{type: "exp", img: star}}/>
            </div>
        </PlayerContext.Provider>
    );
};

export default Player;