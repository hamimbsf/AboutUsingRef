import React, { useRef } from "react";

const Counter = () => {
  let { current } = useRef(0);

  console.log("Rendering...");

  const handleClick = () => {
    current = current + 1;
    console.log(`you have clicked current ${current} times`);
  };

  return (
    <>
      <button onClick={handleClick}>Click me!</button>
    </>
  );
};

export default Counter;
