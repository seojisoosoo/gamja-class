import React from "react";
import { styled } from "styled-components";
import { theme } from "../style/theme";

export default function ErrorPage() {
  return <ErrorPageWrapper>Error</ErrorPageWrapper>;
}

const ErrorPageWrapper = styled.section`
  position: absolute;

  width: 100%;
  height: 100vh;
  ${({ theme }) => theme.fonts.title}

  background-color:   ${({ theme }) => theme.colors.blue}
`;
