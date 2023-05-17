import React from "react";
import { styled } from "styled-components";
import Card from "./card";
import { CARDS_LIST } from "../../core/cardsData";
import { useQuery } from "react-query";
import { getData } from "../../api/data";

export default function CardSection() {
  const { data } = useQuery("a", getData);
  console.log(data);
  return (
    <CardSectionWrapper>
      {data?.map(({ id, name, img }) => (
        <Card key={id} id={id} name={name} img={img} />
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
