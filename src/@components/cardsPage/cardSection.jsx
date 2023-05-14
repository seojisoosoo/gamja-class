import React from "react";
import { styled } from "styled-components";
import Card from "./card";

export default function CardSection() {
  return (
    <CardSectionWrapper>
      <Card />
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.section`
  width: 50rem;
  height: 100vh;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
