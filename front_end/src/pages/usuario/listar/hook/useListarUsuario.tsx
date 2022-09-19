import { useEffect, useState } from "react";
import usuarioMicroservice from "../../../../core/usuario.microservice";

export function useListarUsuario() {
  const [usuarios, setUsuarios] = useState<any[]>([]);
  const [busca, setBusca] = useState();

  useEffect(() => {
    listar();
  }, [busca]);

  async function listar() {
    const { data } = await usuarioMicroservice.get("/usuarios");
    setUsuarios(data);
  }

  return {
    usuarios,
  };
}
