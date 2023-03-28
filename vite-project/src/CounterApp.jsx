import { useState } from "react";

export const CounterApp = () => {
  const [counter, setCounter] = useState(0);
  //El estado cambió, por lo tanto se debe volver a renderizar el componente. 
  //Eso ocurre cuando se ejecuta el setCounter.

  const handleAdd = () => {
    setCounter(counter + 1);
    //setCounter((c) => {c+1})
  };

  const hanldeSubstract = () =>{
    setCounter(counter - 1);
  }

  const handleReset = () =>{
    setCounter(0);
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={hanldeSubstract}>-1</button>
      <button onClick={handleReset}>Reset</button>
    </>
  );
};

