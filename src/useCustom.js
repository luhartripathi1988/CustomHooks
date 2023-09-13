import { useState } from "react";

function useCounter(intialVal, val) {
  const [count, setCount] = useState(intialVal);
  const increment = () => {
    setCount(count + val);
  };
  const decrement = () => {
    setCount(count - val);
  };

  return { count, increment, decrement };
}

export default useCounter;
