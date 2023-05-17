import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { CARDS_LIST } from "../core/cardsData";

export default function DetailPage() {
  // const { state } = useLocation();
  const { cardId } = useParams();
  const [data, setData] = useState(CARDS_LIST.filter((card) => card.id === Number(cardId)))[0];

  return (
    // <>
    //   <h1>{state.name}</h1>
    //   <img src={state.img} alt={state.name} />
    // </>
    <>
      <h1>{data.name}</h1>
      <img src={data.img} alt={data.title} />
    </>
  );
}
