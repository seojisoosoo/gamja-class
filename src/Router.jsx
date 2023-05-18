import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CardsPage from "./@pages/cardsPage";
import UploadPage from "./@pages/uploadPage";
import DetailPage from "./@pages/detailPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CardsPage />} />
        <Route path="/upload-card-data" element={<UploadPage />} />
        <Route path="/detail/:cardId" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}
