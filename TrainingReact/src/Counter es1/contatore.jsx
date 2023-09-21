import React from "react";
import { createContext } from "react";
import VisualizzaContatore from "./visualizzacontatore";
import useCounter from "./useCounter";

export const ContestoContatore = createContext();

export default function Contatore() {
  const { count, incrementCounter, decrementCounter } = useCounter();

  return (
    <div>
      <ContestoContatore.Provider value={count}>
        <VisualizzaContatore />
      </ContestoContatore.Provider>
      <button onClick={incrementCounter}>+1</button>
      <button onClick={decrementCounter}>-1</button>
    </div>
  );
}
