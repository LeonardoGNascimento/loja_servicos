import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../../../core/api";
import { useErro } from "../../../hooks/erro/useErro";

export function useHome () {

  const { setErro } = useErro()
  const [contagemCliente, setContagemCliente] = useState<number>(0);

  useEffect(() => {
    buscarContagemCliente()
  }, [])

  async function buscarContagemCliente() {
    try {
      const { data } = await api.get('/cliente/')
      setContagemCliente(data.length);
    } catch (error: any) {
      setErro(error.response.data.message ? error.response.data.message : 'Ocorreu um erro')
    }
  }

  return {
    contagemCliente
  }
}