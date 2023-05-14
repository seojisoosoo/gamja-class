import React, { useEffect } from "react";
import { styled } from "styled-components";

export default function MainHeader(props) {
  const { clickedCnt, message } = props;

  return (
    <Header color={message?.color}>
      <h1>
        {message?.title}
        {clickedCnt}개 눌림
      </h1>
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
  background-color: ${({ color }) => color};
`;
