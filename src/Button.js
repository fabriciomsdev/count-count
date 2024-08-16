import React, { useState, useCallback } from "react";

const CounterButton = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const buttonStyles = {
    borderRadius: "40px",
    backgroundColor: "#3579f6",
    color: "white",
    padding: "24px",
  };

  const handleClick = useCallback(() => {
    setCount(count + 1);
  });

  return (
    <button onClick={handleClick} style={buttonStyles}>
      Click count: {count}
    </button>
  );
};

export default CounterButton;
