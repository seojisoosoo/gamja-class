import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return <FooterWrapper>내가 만든 사이트</FooterWrapper>;
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  bottom: 0;

  width: 100%;

  ${({ theme }) => theme.fonts.title}

  background-color:   ${({ theme }) => theme.colors.blue};
`;
