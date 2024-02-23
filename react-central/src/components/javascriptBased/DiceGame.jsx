import React, { useState } from "react";

function DiceGame() {
  const [result, setResult] = useState("");

  const rollDice = () => {
    const i = Math.floor(Math.random() * 6) + 1;

    setResult(i);
  };

  const victory = (number) => {
    if (number == 6) {
      return "Vous avez gagné";
    } else return "Vous avez perdu";
  };

  return (
    <div>
      <h2>Jeu de dés</h2>
      <button onClick={rollDice}>Roll Dice</button>
      {result && <p>{result}</p>}

      {result && (
        <div className="victory">
          <p>{victory(result)}</p>
        </div>
      )}
    </div>
  );
}

export default DiceGame;
