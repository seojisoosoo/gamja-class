import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import CardsPage from "./@pages/cardsPage";
import PostPage from "./@pages/postPage";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from "recoil";

export default function App() {
  return (
    <>
      <RecoilRoot>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CardsPage />
          <PostPage />
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
}
