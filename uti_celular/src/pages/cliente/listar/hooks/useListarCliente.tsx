import { useEffect, useState } from "react";
import clienteMicroservice from "../../../../core/cliente.microservice";

export function useListarCliente() {
  const [cliente, setCliente] = useState<any[]>([]);
  const [busca, setBusca] = useState();

  useEffect(() => {
    listar();
  }, [busca]);

  async function listar() {
    const { data } = await clienteMicroservice.get("/cliente/");
    setCliente(data);
  }

  return { cliente };
}
