import React, { useState } from "react";

function DiceGame() {
  const [result, setResult] = useState("");

  const rollDice = () => {
    const i = Math.floor(Math.random() * 6) + 1;

    setResult(i);
  };

  const victory = (number) => {
    if ((number = 6)) {
      return true;
    } else return false;
  };

  return (
    <div>
      <h2>Jeu de dés</h2>
      <button onClick={rollDice}>Roll Dice</button>
      {result}

      <div className="victory"></div>
    </div>
  );
}

export default DiceGame;
