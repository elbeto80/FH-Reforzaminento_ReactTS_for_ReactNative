import { useState } from "react";

const useCounter = (inicial: number = 5) => {
  const [num, setNum] = useState(inicial);

  const operacion = (val: number) => {
    setNum(num + val);
  };

  return {
    num,
    operacion,
  };
};

export default useCounter;
