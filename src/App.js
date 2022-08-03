import React, {useState} from "react";
import Player from "./components/Player";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Modal from "./components/Modal";

import './styles/App.css';
//
import player_1 from "./img/PlayerSkin/Player_1.png";
import player_2 from "./img/PlayerSkin/Player_2.png";
import player_3 from "./img/PlayerSkin/Player_3.png";
import player_4 from "./img/PlayerSkin/Player_4.png";
import player_5 from "./img/PlayerSkin/Player_5.png";

import darkPlayer_1 from "./img/PlayerSkin/darkPlayer_1.png";
import darkPlayer_2 from "./img/PlayerSkin/darkPlayer_2.png";
import darkPlayer_3 from "./img/PlayerSkin/darkPlayer_3.png";
import darkPlayer_4 from "./img/PlayerSkin/darkPlayer_4.png";


function App() {
    const [players, setPlayer] = useState([
        {id:1, order: 1, player: {name:"Taf", life: 10, exp: 0, img: player_1, dark_img: darkPlayer_1} },
        {id:2, order: 2, player: {name:"Autonomous", life: 10, exp: 0, img: player_5, dark_img: darkPlayer_2} },
        // {id:2, order: 2, player: {name:"Calista", life: 0, exp: 0, img: player_2, dark_img: darkPlayer_2} },
        // {id:3, order: 3, player: {name:"Damir", life: 20, exp: 0, img: player_3, dark_img: darkPlayer_3} },
        // {id:4, order: 4, player: {name:"Hamlet", life: 20, exp: 0, img: player_4, dark_img: darkPlayer_4} },
    ])

    const [currentPlayer, setCurrentPlayer] = useState(null);

    function dragStartHandler(e, card) {
        console.log('drag', card)
        setCurrentPlayer(card);
    }

    function dragEndHandler(e) {
    }

    function dragOverHandler(e) {
        e.preventDefault();
    }

    function dropHandler(e, card) {
        e.preventDefault();
        console.log('drop', card)
        console.log('drop', currentPlayer.order)
        setPlayer(players.map(c => {
            if (c.id === card.id){
                return {...c, order: currentPlayer.order}
            }
            if (c.id === currentPlayer.id){
                return {...c, order: card.order}
            }
            return c;
        }))
        console.log('drop', currentPlayer.order)
    }

    const sortCards = (a, b) => {
        if (a.order > b.order ){
            return 1;
        }else{
            return -1;
        }
    }
    const [modalActive , setModalActive] = useState(true)
    
    let copyLink = function copyLink() {
        navigator.clipboard.writeText("Test url");
    };
    return (
        <div className="App">
            <div className="wrapper">
                <Header method={setModalActive}/>
                <div className="content">
                    <div className="player-container">
                        {players.sort(sortCards).map((players) =>
                            <div
                                onDragStart={(e) => dragStartHandler(e, players)}
                                onDragLeave={(e) => dragEndHandler(e)}
                                onDragEnd={(e) => dragEndHandler(e)}
                                onDragOver={(e) => dragOverHandler(e)}
                                onDrop={(e) => dropHandler(e, players)}
                                draggable={true}
                                className = "player-wrapper"
                                key= {players.id}>
                                <Player player={players.player} key= {players.id} />
                            </div>
                        )}
                    </div>
                </div>
                <Footer/>
                <Modal active={modalActive} setActive={setModalActive}>
                    <h1>Save your progress</h1>

                    <p>Scan or copy the link to save your progress:</p>
                    <button className="popup-button" onClick={copyLink}>Copy link</button>

                </Modal>
            </div>
        </div>
    );
}

export default App;
