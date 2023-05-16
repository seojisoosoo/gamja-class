import React from "react";
import { styled } from "styled-components";

export default function Aside() {
  return (
    <SideBar>
      <List>마이페이지</List>
      <List>카드 업로드</List>
      <List>로그아웃</List>
    </SideBar>
  );
}

const SideBar = styled.aside`
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
