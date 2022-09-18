import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { ButtonColapse } from "./style";

interface Props {
  colapsed: boolean;
  setColapsed: any;
}

export function NavBar({ setColapsed, colapsed }: Props) {
  return (
    <ButtonColapse onClick={() => setColapsed(!colapsed)}>
      {!colapsed ? <FaAngleLeft /> : <FaAngleRight />}
    </ButtonColapse>
  );
}
