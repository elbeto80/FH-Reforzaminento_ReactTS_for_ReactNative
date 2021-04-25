import ContadorConHook from "./Components/ContadorConHook";
import Contador from "./Components/Contador";
import Funciones from "./Typescript/Funciones";
import ObjetosLiterales from "./Typescript/ObjetosLiterales";
import TiposBasicos from "./Typescript/TiposBasicos";
import Login from "./Components/Login";
import Usuarios from "./Components/Usuarios";
import Formularios from "./Components/Formularios";

function App() {
  return (
    <div className="App mt-4">
      <h3>Repaso tyscript</h3>

      <hr />

      <TiposBasicos />

      <hr />

      <ObjetosLiterales />

      <hr />

      <Funciones />

      <hr />

      <Contador />

      <hr />

      <ContadorConHook />

      <hr />

      <Login />

      <hr />

      <Usuarios />

      <hr />

      <Formularios />
    </div>
  );
}

export default App;
