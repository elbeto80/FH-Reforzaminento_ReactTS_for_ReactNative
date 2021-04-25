const TiposBasicos = () => {
  const nombre: string = "beto";
  const edad: number = 41;
  const activo: boolean = true;
  const poderes: string[] = [];

  poderes.push("volar");
  poderes.push("fuerza");
  poderes.push("velocidad");

  return (
    <div>
      <h4>Tipos básicos</h4>
      {nombre} - {edad} - {activo ? "Si" : "No"}
      <br />
      {poderes.join(", ")}
    </div>
  );
};

export default TiposBasicos;
