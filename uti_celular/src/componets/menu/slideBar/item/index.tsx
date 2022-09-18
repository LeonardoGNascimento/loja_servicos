import { MenuItem, SubMenu } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import { IMenu } from "../../interface/IMenu";
import { MenuItemCustom } from "./style";

interface Props {
  menu: IMenu[];
}

export function Item({ menu }: Props) {
  return (
    <div>
      <MenuItem>
        Dashboard
        <Link to="/home" />
      </MenuItem>
      {menu
        ? menu.map((item, index) => {
            return (
              <SubMenu
                title={`${item.menu.nome}`}
                key={index}
              >
                {item.funcionalidade.map((funcionalidade) => {
                  return (
                    <MenuItem key={funcionalidade.id}>
                      {funcionalidade.nome_funcionalidade}
                      <Link to={funcionalidade.link} />
                    </MenuItem>
                  );
                })}
              </SubMenu>
            );
          })
        : ""}
    </div>
  );
}
