import { ProSidebar } from "react-pro-sidebar";
import styled from "styled-components";

export const SlideBarContainer = styled.div`
  .collapsed {
    width: 0px;
    min-width: 0px;
  }
  height: 100vh !important;
  overflow: hidden;

  box-shadow: ${({ theme }) => theme.shadow};
`;

export const ProSidebarCustom = styled(ProSidebar)`
  box-shadow: ${({ theme }) => theme.shadow};
`;
