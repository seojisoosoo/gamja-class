import React, { useState } from "react";
import { styled } from "styled-components";
import { clickedCount } from "../../recoil/clickedCount";
import { useRecoilState } from "recoil";

export default function Card(props) {
  const { id, name, img } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickedCnt, setClickedCnt] = useRecoilState(clickedCount);

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
