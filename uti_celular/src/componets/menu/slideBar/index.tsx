import {
  Menu,
  MenuItem,
  SidebarContent,
  SidebarFooter,
} from "react-pro-sidebar";
import { ProSidebarCustom, SlideBarContainer } from "./style";
import { IMenu } from "../interface/IMenu";
import { Item } from "./item";
interface Props {
  colapsed: boolean;
  setColapsed: any;
  menu: IMenu[];
  logout: any;
}

export function SlideBar({ colapsed, setColapsed, menu, logout }: Props) {
  return (
    <SlideBarContainer>
      <ProSidebarCustom collapsed={colapsed}>
        <SidebarContent>
          <Menu iconShape="square">
            <Item menu={menu} />
          </Menu>
        </SidebarContent>
        <SidebarFooter>
          <Menu>
            <MenuItem onClick={logout}>Sair</MenuItem>
          </Menu>
        </SidebarFooter>
      </ProSidebarCustom>
    </SlideBarContainer>
  );
}
