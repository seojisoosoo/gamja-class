import React from "react";
import { styled } from "styled-components";

export default function MainHeader() {
  return (
    <Header>
      <h1>잔망루피 카드</h1>
    </Header>
  );
}

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 10rem;
  position: sticky;
  top: 0;

  ${({ theme }) => theme.fonts.title};
  background-color: ${({ theme }) => theme.colors.blue};
`;
