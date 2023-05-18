import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

export default function Aside() {
  const navigate = useNavigate();

  function moveToUploadPage() {
    navigate("/upload");
  }
  function logout() {
    window.sessionStorage.removeItem("accessToken");
  }

  return (
    <SideBar>
      <List>마이페이지</List>
      <List onClick={moveToUploadPage}>카드 업로드</List>
      <List onClick={logout}>로그아웃</List>
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
