import { ThemeProvider, styled } from "styled-components";
import { GlobalStyle } from "./style/globalStyle";
import { theme } from "./style/theme";
import CardsPage from "./@pages/cardsPage";
import PostPage from "./@pages/postPage";

export default function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CardsPage />
        <PostPage />
      </ThemeProvider>
    </>
  );
}
