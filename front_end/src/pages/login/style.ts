import styled from "styled-components";

export const LoginContainer = styled.div`
`;

export const LoginModal = styled.div`
  position: absolute;
  background-color: #fff;
  color: #000;
  padding: 4rem;
  right: 0;
  top: 0;
  bottom: 0;
  border-radius: 10px;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, .28);
`;

export const Titulo = styled.h1`
  display: flex;
  justify-content: center;
`;

export const Texto = styled.h2`
  margin: 5rem;
`;

export const ContainerBotaoLogar = styled.div`
  display: flex;
  justify-content: center;
`;

export const BotaoLogin = styled.button`
  border: 0;
  color: #fff;
  padding: 1rem 3rem;
  border-radius: 10px;
  background-color: #6a6a6a;
  transition: 0.5s;
  &:hover {
    background-color: #878787;
  }
`;
export const LoginImage = styled.div`
  position: absolute;
  top: 10rem;
  left: 16rem;
`;
