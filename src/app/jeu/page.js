"use client";

import react from "react";
import { useState } from "react";

const jeu = () => {
  const [number, setnumber] = useState(0);

  const Increment = () => setnumber(number + 1);
  const DeIncrement = () => setnumber(number - 1);

  return (
    <>
      <div>{number}</div>
      <button onClick={() => Increment()}>Increment</button>
      <button onClick={() => DeIncrement()}>DeIncrement</button>
    </>
  );
};

export default jeu;
