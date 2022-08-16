import styled from "styled-components";

import { Link } from "react-router-dom";

export const NavigationContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  height: 80px;
`;

export const NavLinksContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const NavLink = styled(Link)`
  padding-left: 20px;
  cursor: pointer;
`;
