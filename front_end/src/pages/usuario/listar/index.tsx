import {
  ExpanderComponentProps,
  TableColumn,
} from "react-data-table-component";
import DataTable from "react-data-table-component";
import { useListarUsuario } from "./hook/useListarUsuario";
import { Button } from "react-bootstrap";
import { Tela } from "../../../componets/tela";
import { Table } from "../../../componets/table";

interface DataRow {
  id: string;
  nome: string;
  email: string;
}

export function ListarUsuario() {
  const { usuarios } = useListarUsuario();

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
      name: "email",
      selector: (row) => (row.email ? row.email : "-"),
      sortable: true,
    },
  ];

  return (
    <Tela titulo="Listar usuario">
      <Table columns={columns} data={usuarios} />
    </Tela>
  );
}
