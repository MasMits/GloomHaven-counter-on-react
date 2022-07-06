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
            setPlayer({...player, [key]: ++player[key]})
        },
        decrement:(key) =>{
            setPlayer({...player, [key]: --player[key]})
        }
    };

    return (
        <PlayerContext.Provider value={{player, methods}}>
            <div className="player" draggable={false}>
                <PlayerAvatar draggable={false}/>
                <Counter type={"life"} img = {heart} draggable={false}/>
                <Counter type={"exp"} img = {star} draggable={false}/>
            </div>
        </PlayerContext.Provider>
    );
};

export default Player;