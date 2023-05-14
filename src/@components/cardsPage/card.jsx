import React, { useState } from "react";
import { styled } from "styled-components";

export default function Card(props) {
  const { id, name, img, setClickedCnt } = props;
  const [isFlipped, setIsFlipped] = useState(false);

  function updateClickedCnt() {
    setClickedCnt((prev) => prev + 1);
    setIsFlipped(!isFlipped);
  }

  return (
    <>
      {isFlipped ? (
        <>hi</>
      ) : (
        <CardWrapper onClick={updateClickedCnt}>
          <h1>{name}</h1>
          <Img src={img} alt={name} />
        </CardWrapper>
      )}
    </>
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
