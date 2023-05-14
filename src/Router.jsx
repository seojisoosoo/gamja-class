import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "./@pages/cardsPage";
import PostPage from "./@pages/postPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/upload" element={<PostPage />} />
      </Routes>
    </BrowserRouter>
  );
}
