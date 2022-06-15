import React from 'react';
import Counter from "./Counter";
import PlayerAvatar from "./PlayerAvatar";

import '../styles/Player.css';


const Player = ( props) => {
    //console.log("Player")
    console.log(props.player.life)
    // const player_l = props.player;
    return (
        <div className="player">
            <PlayerAvatar player={props.player}/>
            <Counter number = {props.player.life}/>
            <Counter number = {props.player.exp}/>
        </div>
    );
};

export default Player;