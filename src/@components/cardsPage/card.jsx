import React, { useState } from "react";
import { styled } from "styled-components";
import { clickedCount } from "../../recoil/clickedCount";
import { useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const { id, name, img } = props;
  const [isFlipped, setIsFlipped] = useState(false);
  const [clickedCnt, setClickedCnt] = useRecoilState(clickedCount);
  const navigate = useNavigate();

  function updateClickedCnt() {
    setClickedCnt((prev) => prev + 1);
    setIsFlipped(!isFlipped);
  }

  function moveToDetail() {
    navigate(`/detail/${id}`);
  }

  return (
    <>
      {isFlipped ? (
        <CardWrapper>hi</CardWrapper>
      ) : (
        <CardWrapper>
          <h1 onClick={moveToDetail}>{name}</h1>
          <Img src={img} alt={name} onClick={updateClickedCnt} />
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
