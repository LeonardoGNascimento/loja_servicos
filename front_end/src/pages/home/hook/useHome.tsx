import { useEffect, useState } from "react";
import clienteMicroservice from "../../../core/cliente.microservice";
import { useErro } from "../../../hooks/erro/useErro";

export function useHome () {

  const { setErro } = useErro()
  const [contagemCliente, setContagemCliente] = useState<number>(0);

  useEffect(() => {
    buscarContagemCliente()
  }, [])

  async function buscarContagemCliente() {
    try {
      const { data } = await clienteMicroservice.get('/cliente/')
      setContagemCliente(data.length);
    } catch (error: any) {
      setErro(error.response.data.message ? error.response.data.message : 'Ocorreu um erro')
    }
  }

  return {
    contagemCliente
  }
}