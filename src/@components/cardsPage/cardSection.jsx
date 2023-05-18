import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "./card";
import { CARDS_LIST } from "../../core/cardsData";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRPData } from "../../api/getRPData";
import LoadingPage from "../../@pages/loadingPage";
import { postData } from "../../api/postData";

export default function CardSection() {
  const {
    data: roopys,
    isLoading,
    isError,
    error,
  } = useQuery(["rpdata"], getRPData, {
    onSuccess: () => {
      console.log("성공했습니다! 짝짝짝");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const [newData, setNewData] = useState({
    name: "",
    img: "",
  });

  function getName(e) {
    setNewData((prev) => ({ ...prev, name: e.target.value }));
  }

  function getImg(e) {
    setNewData((prev) => ({ ...prev, img: e.target.value }));
  }
  const queryClient = useQueryClient();

  const { mutate: newLoopy } = useMutation(postData, {
    onSuccess: () => {
      queryClient.invalidateQueries("rpdata");
    },
    onError: () => {},
  });

  function submitNewData() {
    if (newData.name && newData.img) {
      newLoopy(newData);
    }
  }

  if (isLoading) {
    return <LoadingPage />;
  }

  return (
    <>
      <CardSectionWrapper>
        {roopys?.map(({ id, name, img }) => (
          <Card key={id} id={id} name={name} img={img} />
        ))}
        <UploadPageWrapper>
          <p>이름</p>
          <input type="text" onChange={getName} />
          <p>이미지</p>
          <input type="text" onChange={getImg} />
          <Button type="button" onClick={submitNewData}>
            확인
          </Button>
        </UploadPageWrapper>
      </CardSectionWrapper>
    </>
  );
}

const CardSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 50%;
  height: 115vh;

  background-color: ${({ theme }) => theme.colors.skyblue};
`;

const UploadPageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 20rem;

  ${({ theme }) => theme.fonts.title}
`;

const Button = styled.button`
  width: 10rem;
  height: 5rem;

  background-color: ${({ theme }) => theme.colors.blue};
`;
