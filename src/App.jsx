import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import CardsPage from "./@pages/cardsPage";
import PostPage from "./@pages/postPage";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";
import Router from "./Router";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
