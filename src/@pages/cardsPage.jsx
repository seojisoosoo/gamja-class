import React, { useEffect, useState } from "react";
import MainHeader from "../@components/common/mainHeader";
import Nav from "../@components/common/nav";
import CardSection from "../@components/cardsPage/cardSection";
import Aside from "../@components/common/aside";
import Footer from "../@components/common/footer";
import { styled } from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { clickedCount } from "../recoil/clickedCount";

export default function CardsPage() {
  const clickedCnt = useRecoilValue(clickedCount);
  const [message, setMessage] = useState({
    color: "blue",
    title: "잔망루피 카드",
  });

  useEffect(() => {
    clickedCnt === 10 && setMessage((message) => ({ ...message, title: "다 뒤집어졌다!" }));
  }, [clickedCnt]);

  return (
    <>
      <MainHeader clickedCnt={clickedCnt} message={message} />
      <MainWrapper>
        <Nav />
        <CardSection />
        <Aside />
      </MainWrapper>
      <Footer />
    </>
  );
}

const MainWrapper = styled.section`
  display: flex;
`;
