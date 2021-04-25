import { useForm } from "../Hooks/useForm";

const Formularios = () => {
  const { formulario, onChange, email, password } = useForm({
    email: "beto@algo.com",
    password: "123",
  });

  return (
    <div>
      <h3>Formularios</h3>
      <input
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) => onChange(e.target.value, "email")}
      />

      <input
        className="form-control mt-2"
        placeholder="Password"
        value={password}
        onChange={(e) => onChange(e.target.value, "password")}
      />

      <code>
        <pre>{JSON.stringify(formulario, null, 2)}</pre>
      </code>
    </div>
  );
};

export default Formularios;
