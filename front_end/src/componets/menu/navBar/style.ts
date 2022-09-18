import styled from "styled-components";

export const NavBarContainer = styled.div`
  a {
    color: #ffffff;
    margin: 0 10px;
  }
  width: 1349px;
`;
export const ButtonColapse = styled.button`
  border: 0;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  margin: 10px;
  box-shadow: ${({theme}) => theme.shadow};
`;
