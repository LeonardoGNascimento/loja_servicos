import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarioMicroservice from "../../../core/usuario.microservice";
import { useErro } from "../../../hooks/erro/useErro";

export function useLogin() {
  const { setErro } = useErro();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const navigate = useNavigate();

  function validarErros(setLoading: any) {
    if (!email) {
      setLoading(false);
      return setErro("Informe seu email");
    }

    if (!senha) {
      setLoading(false);
      return setErro("Informe sua senha");
    }
  }

  async function logar(setLoading: any) {
    try {
      validarErros(setLoading);
      const { data } = await usuarioMicroservice.post("/auth/login", {
        email: email,
        senha: senha,
      });
      if (data.autenticado) {
        localStorage.setItem("@token", data.access_token);
        localStorage.setItem("@email", data.usuario.email);
        localStorage.setItem("@nome", data.usuario.nome);
        setTimeout(() => {
          navigate("/home");
        }, 3000);
      }
    } catch (error: any) {
      setLoading(false);
      setErro(
        error.response.data.message.message
          ? error.response.data.message.message
          : "Erro ao logar"
      );
    }
  }

  async function logout() {
    localStorage.removeItem("@token");
    localStorage.removeItem("@email");
    localStorage.removeItem("@nome");
    window.location.reload();
  }

  return {
    logar,
    setEmail,
    setSenha,
    logout,
  };
}
