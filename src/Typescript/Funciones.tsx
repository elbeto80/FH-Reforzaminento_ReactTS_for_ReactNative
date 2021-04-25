const Funciones = () => {
  const sumar = (a: number, b: number): number => {
    return a + b;
  };

  return (
    <div>
      <h4>Funciones</h4>
      <p>El resultado es: {sumar(3, 8)}</p>
    </div>
  );
};

export default Funciones;
