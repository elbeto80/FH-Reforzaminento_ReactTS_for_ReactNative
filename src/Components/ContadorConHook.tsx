import useCounter from "../Hooks/useCounter";

const ContadorConHook = () => {
  const { num, operacion } = useCounter();

  return (
    <div>
      <h4>ContadorConHook Hooks</h4>
      <p>Suma con hook: {num} </p>
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

export default ContadorConHook;
