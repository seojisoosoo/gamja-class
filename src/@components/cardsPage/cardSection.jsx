import React from "react";
import { styled } from "styled-components";
import Card from "./card";
import { CARDS_LIST } from "../../core/cardsData";

export default function CardSection(props) {
  const { clickedCnt, setClickedCnt } = props;

  return (
    <CardSectionWrapper>
      {CARDS_LIST.map(({ id, name, img }) => (
        <Card key={id} id={id} name={name} img={img} clickedCnt={clickedCnt} setClickedCnt={setClickedCnt} />
      ))}
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 50%;
  height: 115vh;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;
