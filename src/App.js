import React, {useState} from "react";
import Player from "./components/Player";
import './styles/App.css';
//
import player_1 from "./img/PlayerSkin/Player_1.png";
import player_2 from "./img/PlayerSkin/Player_2.png";
import player_3 from "./img/PlayerSkin/Player_3.png";
import player_4 from "./img/PlayerSkin/Player_4.png";




// function player(name, life, exp, img) {
//     this.name = name;
//     this.life = life;
//     this.exp = exp;
//     this.img = img;
//
// }

function App() {
    const [players, setPlayer] = useState([
        {id:1, player: {name:"Taf", life: 10, exp: 0, img: player_1} },
        {id:2, player: {name:"Calista", life: 10, exp: 0, img: player_2} },
        {id:3, player: {name:"Damir", life: 20, exp: 0, img: player_3} },
        {id:4, player: {name:"Hamlet", life: 20, exp: 0, img: player_4} },
    ])


  return (
    <div className="App">
        <div className="wrapper">
            {players.map((players) =>
                <Player player={players.player} key= {players.id} />
            )}
        </div>
    </div>
  );
}

export default App;
