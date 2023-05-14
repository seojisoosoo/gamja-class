import React from "react";
import { styled } from "styled-components";

export default function Card() {
  return (
    <CardWrapper>
      <h1>잔망루피</h1>
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 8rem;
  height: 8rem;

  padding: 1rem;
  margin: 1rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;
