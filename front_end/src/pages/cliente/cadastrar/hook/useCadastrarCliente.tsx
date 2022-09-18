import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import clienteMicroservice from "../../../../core/cliente.microservice";
import { useErro } from "../../../../hooks/erro/useErro";

export function useCadastrarCliente () {
  const [nome, setNome] = useState('')
  const [cpf, setCpf] = useState('')
  const [cep, setCep] = useState('')
  const [logradouro, setLogradouro] = useState('')
  const [cidade, setCidade] = useState('')
  const [numero, setNumero] = useState('')

  const { setErro } = useErro()

  useEffect(() => {
    setLogradouro('')
    setCidade('')
    if(cep.length == 8) {
      buscarCep()
    }
  }, [cep])

  function validarErros () {
    if(!nome) return setErro('Informe o nome do cliente')
    if(!cpf) return setErro('Informe o cpf do cliente')
    if(!cep) return setErro('Informe o cep do cliente')
  }

  async function cadastrar() {
    validarErros()
    try {
      await clienteMicroservice.post('/cliente', {nome, cpf, cep, logradouro, cidade, numero})
      toast.success('Cliente cadastrado com sucesso')
    } catch (error: any) {
      setErro(error.response.data.message ? error.response.data.message : 'Ocorreu um erro')
    }
  }

  async function buscarCep() {
    const { data } = await axios.get(`http://viacep.com.br/ws/${cep}/json/`)
    setLogradouro(data.logradouro)
    setCidade(data.localidade)
  }

  return{
    setNome,
    setCpf,
    setCep,
    setLogradouro,
    setCidade,
    setNumero,
    logradouro,
    cidade,
    cadastrar
  }
}