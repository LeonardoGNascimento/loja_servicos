import { useLogin } from "../../pages/login/hook/useLogin";
import { SlideBar } from "./slideBar";
import { useMenu } from "./hook/useMenu";
import { ContainerMenu, Tela } from "./style";
import { NavBar } from "./navBar";

interface Props {
  children: any;
}

export function SideBar({ children }: Props) {
  const { menu, colapsed, setColapsed } = useMenu();
  const { logout } = useLogin();

  return (
    <ContainerMenu>
      <SlideBar
        colapsed={colapsed}
        setColapsed={setColapsed}
        menu={menu}
        logout={logout}
      />
      <div>
        <NavBar colapsed={colapsed} setColapsed={setColapsed} />
      </div>
      <Tela>{children}</Tela>
    </ContainerMenu>
  );
}
