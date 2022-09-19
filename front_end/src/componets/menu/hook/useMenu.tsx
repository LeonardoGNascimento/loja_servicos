import { useEffect, useState } from "react";
import menuMicroservice from "../../../core/menu.microservice";
import { IMenu } from "../interface/IMenu";

export function useMenu() {
  const [menu, setMenu] = useState<IMenu[]>([]);
  const [colapsed, setColapsed] = useState<boolean>(false)

  useEffect(() => {
    listar();
  }, []);

  async function listar() {
    const { data } = await menuMicroservice.get(`/menu/permissoes`);
    setMenu(data);
  }

  return {
    menu,
    colapsed,
    setColapsed
  };
}
