import "./styles.css";
import React from "react";
import useCustom from "./useCustom";

export default function App() {
  const { count, increment, decrement } = useCustom(0, 1);
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
