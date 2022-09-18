import { TableColumn } from "react-data-table-component";
import { useListarCliente } from "./hooks/useListarCliente";
import { Tela } from "../../../componets/tela";
import { Table } from "../../../componets/table";

interface DataRow {
  id: string;
  nome: string;
  cpf: string;
  cep: string;
  logradouro: string;
  cidade: string;
  numero: string;
}

export function ListarCliente() {
  const { cliente } = useListarCliente();

  const columns: TableColumn<DataRow>[] = [
    {
      name: "id",
      selector: (row) => (row.id ? row.id : "-"),
      sortable: true,
    },
    {
      name: "nome",
      selector: (row) => (row.nome ? row.nome : "-"),
      sortable: true,
    },
    {
      name: "cpf",
      selector: (row) => (row.cpf ? row.cpf : "-"),
      sortable: true,
    },
    {
      name: "cep",
      selector: (row) => (row.cep ? row.cep : "-"),
      sortable: true,
    },
    {
      name: "logradouro",
      selector: (row) => (row.logradouro ? row.logradouro : "-"),
      sortable: true,
    },
    {
      name: "cidade",
      selector: (row) => (row.cidade ? row.cidade : "-"),
      sortable: true,
    },
    {
      name: "numero",
      selector: (row) => (row.numero ? row.numero : "-"),
      sortable: true,
    },
  ];

  return (
    <Tela titulo="Listar cliente">
      <Table columns={columns} data={cliente}/>
    </Tela>
  );
}
