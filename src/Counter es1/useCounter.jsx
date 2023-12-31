import { useState } from "react";

export default function useCounter() {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  return { incrementCounter, decrementCounter, count };
}
