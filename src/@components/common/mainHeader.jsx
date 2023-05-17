import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { styled } from "styled-components";
import { clickedCount } from "../../recoil/clickedCount";

export default function MainHeader(props) {
  const { message } = props;
  // const [clickedCnt, setClickedCnt] = useRecoilState(clickedCount);
  const clickedCnt = useRecoilValue(clickedCount);

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
  color: ${({ color }) => color};
  background-color: ${({ theme }) => theme.colors.blue};
`;
