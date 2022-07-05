import React, {useContext} from 'react';
import left from "../img/interface/left.svg";
import right from "../img/interface/right.svg";
import '../styles/Counter.css';
import {PlayerContext} from "./Player"


const Counter = (props) => {
    const context = useContext(PlayerContext);

    function increment(){
        context.methods.increment(props.type);
    }

    function decrement(){
        context.methods.decrement(props.type);
    }

    return (
        <div>
            <div className = "counter">
                <button onClick={decrement}><img src={left} alt="" draggable={false}/></button>
                <h1 className = "number" draggable={false}>{context.player[props.type.type]}</h1>
                <button onClick={increment} draggable={false}><img src={right} alt=""/></button>
            </div>
            <div className = "icon_box">
                <img className = "icon" src={props.type.img} alt="" draggable={false}/>
            </div>
        </div>

    );
};

export default Counter;