import React from "react";
import { styled } from "styled-components";
import { theme } from "../style/theme";

export default function ErrorPage() {
  return <ErrorPageWrapper>Loading</ErrorPageWrapper>;
}

const ErrorPageWrapper = styled.section`
  width: 192rem;
  height: 100vh;
  ${({ theme }) => theme.fonts.title}

  background-color:   ${({ theme }) => theme.colors.blue}
`;
