import React, {useState} from 'react';
import heart from "../img/interface/heart.svg";
import left from "../img/interface/left.svg";
import right from "../img/interface/right.svg";
import '../styles/Counter.css';


const Counter = (props) => {
    const [count, setCount] = useState(props.number);

    function increment(){
        setCount(count + 1);
    }

    function decrement(){
        setCount(count - 1);
    }

    return (
        <div>
            <div className = "counter">
                <button onClick={decrement}><img src={left} alt=""/></button>
                <h1 className = "number">{count}</h1>
                <button onClick={increment}><img src={right} alt=""/></button>
            </div>
            <div className = "icon_box">
                <img className = "icon" src={heart} alt=""/>
            </div>
        </div>

    );
};

export default Counter;