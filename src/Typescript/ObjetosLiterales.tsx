interface Persona {
  nombreCompleto: string;
  edad: number;
  direccion: Direccion;
}
interface Direccion {
  pais: string;
  casaNo: number;
}

const ObjetosLiterales = () => {
  const persona: Persona = {
    nombreCompleto: "Beto",
    edad: 41,
    direccion: {
      pais: "Vzla",
      casaNo: 88,
    },
  };
  return (
    <div>
      <h4>Objetos Literales</h4>
      <code>
        <pre>{JSON.stringify(persona, null, 2)}</pre>
      </code>
    </div>
  );
};

export default ObjetosLiterales;
