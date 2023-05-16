import React from "react";
import { styled } from "styled-components";

export default function Footer() {
  return <FooterWrapper>내가 만든 사이트</FooterWrapper>;
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.fonts.title}

  background-color:   ${({ theme }) => theme.colors.blue};
`;
