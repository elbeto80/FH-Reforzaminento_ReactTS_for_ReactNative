import { useEffect, useReducer } from "react";

interface AutState {
  validando: boolean;
  token: string | null;
  userName: string;
  nombre: string;
}

const initialState: AutState = {
  validando: true,
  token: null,
  userName: "",
  nombre: "",
};

type LoginPayload = {
  userName: string;
  nombre: string;
};

type AuthAction = { type: "logout" } | { type: "login"; payload: LoginPayload };

const authReducer = (state: AutState, action: AuthAction): AutState => {
  switch (action.type) {
    case "logout":
      return {
        validando: false,
        token: null,
        userName: "",
        nombre: "",
      };

    case "login":
      const { userName, nombre } = action.payload;
      return {
        validando: false,
        token: "XXX123",
        userName,
        nombre,
      };

    default:
      return state;
  }
};

const Login = () => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: "logout" });
    }, 1500);
  }, []);

  const login = () => {
    dispatch({
      type: "login",
      payload: {
        nombre: "Alberto",
        userName: "beto",
      },
    });
  };

  const logout = () => {
    dispatch({
      type: "logout",
    });
  };

  if (state.validando) {
    return (
      <>
        <h3>Login</h3>

        <div className="alert alert-info"> Validando... </div>
      </>
    );
  }

  return (
    <div>
      <h3>Login</h3>

      {state.token ? (
        <div className="alert alert-success"> Autenticado: {state.nombre} </div>
      ) : (
        <div className="alert alert-danger"> No autenticado </div>
      )}

      {state.token ? (
        <button className="btn btn-warning" onClick={logout}>
          Logout
        </button>
      ) : (
        <button className="btn btn-primary" onClick={login}>
          Login
        </button>
      )}
    </div>
  );
};

export default Login;
