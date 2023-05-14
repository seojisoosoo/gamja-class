import React from "react";
import MainHeader from "../@components/common/mainHeader";
import Nav from "../@components/common/nav";
import CardSection from "../@components/cardsPage/cardSection";
import Aside from "../@components/common/aside";
import Footer from "../@components/common/footer";
import { styled } from "styled-components";

export default function CardsPage() {
  return (
    <>
      <MainHeader />
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
