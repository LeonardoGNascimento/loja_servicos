import { Route, Routes } from "react-router-dom";
import { ListarUsuario } from "../listar";

export function UsuarioRoute() {
  return (
    <Routes>
      <Route path="/permissao" element={<ListarUsuario />}></Route>
    </Routes>
  );
}
