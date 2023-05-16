import React from "react";
import { styled } from "styled-components";

export default function Nav() {
  return (
    <NavBar>
      <ul>
        <List>전체</List>
        <List>행복루피</List>
        <List>화남루피</List>
      </ul>
    </NavBar>
  );
}

const NavBar = styled.nav`
  width: 25%;
  height: 15rem;

  padding: 1rem;
  margin: 1rem;

  border-radius: 1rem;

  ${({ theme }) => theme.fonts.text}
  background-color: ${({ theme }) => theme.colors.blue};
`;

const List = styled.li`
  margin: 0.5rem;
  background-color: ${({ theme }) => theme.colors.skyblue};
`;
