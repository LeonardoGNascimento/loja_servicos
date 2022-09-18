import { Navigate } from "react-router-dom";
import { SideBar } from "../componets/menu";

interface Props {
  children: any;
}

export const Private = (props: Props) => {
  const token = localStorage.getItem("@token");

  if (!token) {
    return <Navigate to="/" />;
  }

  return <SideBar>{props.children}</SideBar>;
};
