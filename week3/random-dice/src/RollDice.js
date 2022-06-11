import { useState } from "react";
import Die from "./Die.js";

function RollDice() {
  const [die1, setDie1] = useState(0);
  const [die2, setDie2] = useState(0);

  const blowRollDie = () => {
    setDie1(Math.floor(Math.random() * 6) + 1);
    setDie2(Math.floor(Math.random() * 6) + 1);
  };

  return (
    <div>
    <>
  
      <div id="dice-board">
        <Die value={die1} />
        <Die value={die2} />
      </div>

      <button onClick={blowRollDie}>Roll Dice</button>
    </>
    </div>
  );
}

export default RollDice;
