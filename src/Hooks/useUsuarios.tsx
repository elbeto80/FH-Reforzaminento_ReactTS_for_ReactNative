import { useEffect, useState, useRef } from "react";
import { Backend } from "../Services/Backend";
import { resReqUsers, User } from "../Interfaces/reqRes";

const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<User[]>([]);

  useEffect(() => {
    getUsusarios();
  }, []);

  const paginaRef = useRef(1);

  const getUsusarios = async () => {
    const resp = await Backend.get<resReqUsers>("/users", {
      params: {
        page: paginaRef.current,
      },
    });

    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
    } else {
      paginaRef.current--;
      alert("No hay mas usuarios");
    }
  };

  const pagAnterior = () => {
    if (paginaRef.current > 1) {
      paginaRef.current--;
      getUsusarios();
    }
  };

  const pagSiguiente = () => {
    paginaRef.current++;
    getUsusarios();
  };

  return {
    usuarios,
    pagAnterior,
    pagSiguiente,
  };
};

export default useUsuarios;
