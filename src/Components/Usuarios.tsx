import useUsuarios from "../Hooks/useUsuarios";
import { User } from "../Interfaces/reqRes";

const Usuarios = () => {
  const { usuarios, pagAnterior, pagSiguiente } = useUsuarios();
  const renderUser = (user: User) => {
    return (
      <tr key={user.id}>
        <td>
          <img
            src={user.avatar}
            alt={user.first_name}
            style={{ width: 50, borderRadius: 50 }}
          />
        </td>
        <td>
          {user.first_name} {user.last_name}
        </td>
        <td> {user.email} </td>
      </tr>
    );
  };

  return (
    <div>
      <h4>Usuarios</h4>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>{usuarios.map((user) => renderUser(user))}</tbody>
      </table>
      <button className="btn btn-warning" onClick={pagAnterior}>
        Anterior
      </button>
      &nbsp;
      <button className="btn btn-danger" onClick={pagSiguiente}>
        Siguiente
      </button>
    </div>
  );
};

export default Usuarios;
