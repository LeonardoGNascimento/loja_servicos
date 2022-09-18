import { Col, Container, Navbar, Row } from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
import { Carta } from "../../componets/carta";
import { useHome } from "./hook/useHome";
import "react-pro-sidebar/dist/css/styles.css";
import { Tela } from "../../componets/tela";

export function Home() {
  const { contagemCliente } = useHome();
  return (
    <Tela titulo="Dashboard">
      <Row>
        <Col>
          <Carta titulo={contagemCliente} subTitulo="Clientes cadastrados" />
        </Col>
      </Row>
    </Tela>
  );
}
