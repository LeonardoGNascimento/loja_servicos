import { Button, Col, Form, Row } from "react-bootstrap";
import { Tela } from "../../../componets/tela";
import { useCadastrarCliente } from "./hook/useCadastrarCliente";
import { CadastroClienteContainer } from "./style";

export function CadastrarCliente() {
  const { setNome, setCpf, setCep, setNumero, logradouro, cidade, cadastrar } =
    useCadastrarCliente();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    cadastrar();
  };

  return (
    <Tela titulo="Cadastro cliente">
      <CadastroClienteContainer>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="nome">
                <Form.Control
                  type="text"
                  placeholder="Nome"
                  onChange={(e) => setNome(e.target.value)}
                />
                <Form.Label>Nome</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="cpf">
                <Form.Control
                  type="text"
                  placeholder="CPF"
                  onChange={(e) => setCpf(e.target.value)}
                />
                <Form.Label>CPF</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
              <Form.Group className="mb-3" controlId="cep">
                <Form.Control
                  type="text"
                  placeholder="CEP"
                  onChange={(e) => setCep(e.target.value)}
                />
                <Form.Label>CEP</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="logradouro">
                <Form.Control
                  type="text"
                  placeholder="Logradouro"
                  defaultValue={logradouro ? logradouro : ""}
                  disabled={true}
                />
                <Form.Label>Logradouro</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="cidade">
                <Form.Control
                  type="text"
                  placeholder="Cidade"
                  defaultValue={cidade ? cidade : ""}
                  disabled={true}
                />
                <Form.Label>Cidade</Form.Label>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group className="mb-3" controlId="numero">
                <Form.Control
                  type="text"
                  placeholder="numero"
                  onChange={(e) => setNumero(e.target.value)}
                />
                <Form.Label>Número</Form.Label>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="dark" type="submit">
            Cadastrar
          </Button>
        </Form>
      </CadastroClienteContainer>
    </Tela>
  );
}
