import React, { useState } from "react";
// import Game from './components/game'
import "./App.css";

const App = () => {
  const [btn, setBtn] = useState([{ a: 1 }]);
  const onClick = () => {
    let elem = [...btn];
    elem.push({ a: 1 });
    // setBtn(prevVal => [...prevVal],{a:1});
    setBtn(elem)
  };
  console.log(btn)
  return (
    <div className="app">
      {/* <h1 >Tik Tok Toe Game</h1>
            <Game/> */}

      <h1>Start Coding</h1>
      {btn.map((a, index) => (
        <p key={index}>{a.a}</p>
      ))}
      <button onClick={onClick}>Click</button>
    </div>
  );
};

export default App;
