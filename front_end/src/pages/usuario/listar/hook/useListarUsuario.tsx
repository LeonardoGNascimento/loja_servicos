import { useEffect, useState } from "react";
import api from "../../../../core/api";

export function useListarUsuario () {

  const [usuarios, setUsuarios] = useState<any[]>([])
  const [busca, setBusca] = useState()

  useEffect(() => {
    listar()
  }, [busca])

  async function listar() {
    const { data } = await api.get('/usuarios');     
    setUsuarios(data)
  }

  return {
    usuarios
  }
}