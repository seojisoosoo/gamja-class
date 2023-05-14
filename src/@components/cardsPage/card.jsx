import React from "react";
import { styled } from "styled-components";

export default function Card(props) {
  const { id, name, img } = props;
  return (
    <CardWrapper>
      <h1>{name}</h1>
      <Img src={img} alt={name} />
    </CardWrapper>
  );
}

const CardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  padding: 1rem;
  margin: 1rem;

  ${({ theme }) => theme.fonts.text};
  background-color: ${({ theme }) => theme.colors.blue};
`;

const Img = styled.img`
  width: 15rem;
`;
