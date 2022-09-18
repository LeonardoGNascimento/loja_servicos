import { Route, Routes } from "react-router-dom";
import { Private } from "../../../core/privateRoutes";
import { CadastrarCliente } from "../cadastrar";
import { ListarCliente } from "../listar";

export function ClienteRoute() {
  return (
    <Routes>
      <Route path="/lista" element={<ListarCliente />}></Route>
      <Route path="/cadastro" element={<CadastrarCliente />}></Route>
    </Routes>
  );
}
