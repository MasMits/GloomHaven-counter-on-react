import React, {useState} from "react";
import Player from "./components/Player";
import Footer from "./components/Footer";
import Header from "./components/Header";

import './styles/App.css';
//
import player_1 from "./img/PlayerSkin/Player_1.png";
import player_2 from "./img/PlayerSkin/Player_2.png";
import player_3 from "./img/PlayerSkin/Player_3.png";
import player_4 from "./img/PlayerSkin/Player_4.png";
import darkPlayer_1 from "./img/PlayerSkin/darkPlayer_1.png";
import darkPlayer_2 from "./img/PlayerSkin/darkPlayer_2.png";
import darkPlayer_3 from "./img/PlayerSkin/darkPlayer_3.png";
import darkPlayer_4 from "./img/PlayerSkin/darkPlayer_4.png";


function App() {
    const [players, setPlayer] = useState([
        {id:1, player: {name:"Taf", life: 10, exp: 0, img: player_1, dark_img: darkPlayer_1} },
        {id:2, player: {name:"Calista", life: 0, exp: 0, img: player_2, dark_img: darkPlayer_2} },
        {id:3, player: {name:"Damir", life: 20, exp: 0, img: player_3, dark_img: darkPlayer_3} },
        {id:4, player: {name:"Hamlet", life: 20, exp: 0, img: player_4, dark_img: darkPlayer_4} },
    ])


    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <div className="content">
                    <div className="player-container">
                        {players.map((players) =>
                            <Player player={players.player} key= {players.id} />
                        )}
                    </div>
                </div>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
