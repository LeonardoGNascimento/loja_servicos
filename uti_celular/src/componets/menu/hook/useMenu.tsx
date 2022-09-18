import { useEffect, useState } from "react";
import api from "../../../core/api";
import { IMenu } from "../interface/IMenu";

export function useMenu() {
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [colapsed, setColapsed] = useState<boolean>(false)

  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    const { data } = await api.get(`/menu/`);
    console.log(data);
    setMenu(data);
  }

  return {
    menu,
    colapsed,
    setColapsed
  };
}
