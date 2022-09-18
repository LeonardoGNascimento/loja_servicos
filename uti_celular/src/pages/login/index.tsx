import { Form, Spinner } from "react-bootstrap";
import { useLogin } from "./hook/useLogin";
import { useState } from "react";
import {
  BotaoLogin,
  ContainerBotaoLogar,
  LoginContainer,
  LoginImage,
  LoginModal,
  Texto,
  Titulo,
} from "./style";

import personagemCelular from "../../assets/img/personagem-de-celular.png";

export function Login() {
  const { setEmail, setSenha, logar } = useLogin();
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: any) {
    e.preventDefault();
    setLoading(true);
    logar(setLoading);
  }

  return (
    <LoginContainer>
      <LoginImage>
        <img src={personagemCelular} />
      </LoginImage>
      <LoginModal>
        <Titulo>UTI do celular</Titulo>
        <Texto>Olá Seja bem-vindo</Texto>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="email">
            <Form.Control
              type="email"
              placeholder="Insira seu e-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="senha">
            <Form.Control
              type="password"
              placeholder="Insira sua senha"
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <ContainerBotaoLogar>
            {loading ? (
              <Spinner animation="border" />
            ) : (
              <BotaoLogin type="submit">Entrar</BotaoLogin>
            )}
          </ContainerBotaoLogar>
        </Form>
      </LoginModal>
    </LoginContainer>
  );
}
