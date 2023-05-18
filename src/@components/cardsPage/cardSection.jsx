import React, { useState } from "react";
import { styled } from "styled-components";
import Card from "./card";
import { CARDS_LIST } from "../../core/cardsData";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { getRPData } from "../../api/getRPData";
import { postRPData } from "../../api/postRPData";
import { useNavigate } from "react-router-dom";
import LoadingPage from "../../@pages/loadingPage";

export default function CardSection() {
  const [newData, setNewData] = useState({ name: "", img: "" });
  const navigate = useNavigate();

  const [serverData, setServerData] = useState([]);

  const {
    data: roopys,
    isLoading,
    isError,
  } = useQuery(["loopyData"], getRPData, {
    onSuccess: (response) => {
      setServerData(response);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  function getName(e) {
    setNewData((prev) => ({ ...prev, name: e.target.value }));
  }

  function getImg(e) {
    setNewData((prev) => ({ ...prev, img: e.target.value }));
  }

  function submit() {
    if (newData.name && newData.img) {
      newLoopy(newData);
    }
  }

  const queryClient = useQueryClient();

  const { mutate: newLoopy } = useMutation(postRPData, {
    onSuccess: (res) => {
      console.log("성공");
      queryClient.invalidateQueries("loopyData");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  if (isLoading) {
    return <LoadingPage />;
  }

  if (isError) {
    return <LoadingPage />;
  }

  return (
    <CardSectionWrapper>
      {roopys?.map(({ id, name, img }) => (
        <Card key={id} id={id} name={name} img={img} />
      ))}

      <UploadPageWrapper>
        <p>이름</p>
        <input type="text" onChange={getName} />
        <p>이미지</p>
        <input type="text" onChange={getImg} />
        <Button type="button" onClick={submit}>
          확인
        </Button>
      </UploadPageWrapper>
    </CardSectionWrapper>
  );
}

const CardSectionWrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  width: 50%;
  height: 100%;
  margin-bottom: 5rem;

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
