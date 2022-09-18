import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Private } from "./core/privateRoutes";
import { ClienteRoute } from "./pages/cliente/routes";
import { Home } from "./pages/home";
import { Login } from "./pages/login";
import { UsuarioRoute } from "./pages/usuario/route";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route
          path="/home"
          element={
            <Private>
              <Home />
            </Private>
          }
        ></Route>
        <Route
          path="/cliente/*"
          element={
            <Private>
              <ClienteRoute />
            </Private>
          }
        ></Route>
        <Route
          path="/usuario/*"
          element={
            <Private>
              <UsuarioRoute />
            </Private>
          }
        ></Route>
      </Routes>
    </Router>
  );
};
