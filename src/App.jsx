import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Title>웰컴~</Title>
      </ThemeProvider>
    </>
  );
}

const Title = styled.h1`
  ${({ theme }) => theme.fonts.title}
`;
