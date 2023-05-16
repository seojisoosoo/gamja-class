import React from "react";
import { styled } from "styled-components";
import Card from "./card";
import { CARDS_LIST } from "../../core/cardsData";

export default function CardSection() {
  return (
    <CardSectionWrapper>
      {CARDS_LIST.map(({ id, name, img }) => (
        <Card key={id} id={id} name={name} img={img} />
      ))}
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 50%;
  height: 150vh;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
