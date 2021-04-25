import { useState } from "react";

const Contador = () => {
  const [num, setNum] = useState(0);

  const operacion = (val: number) => {
    setNum(num + val);
  };

  return (
    <div>
      <h4>Contador useState</h4>
      <p>Suma {num} </p>
      <button className="btn btn-primary" onClick={() => operacion(1)}>
        +1
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={() => operacion(-1)}>
        -1
      </button>
    </div>
  );
};

export default Contador;
