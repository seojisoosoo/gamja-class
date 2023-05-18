import React, { useEffect, useRef, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { styled } from "styled-components";
import { postRPData } from "../api/postRPData";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [newData, setNewData] = useState({ name: "", img: "" });

  const nameRef = useRef(null);
  const imgRef = useRef(null);

  const navigate = useNavigate();

  function getName(e) {
    setNewData((prev) => ({ ...prev, name: e.target.value }));
  }

  function getImg(e) {
    setNewData((prev) => ({ ...prev, img: e.target.value }));
  }

  function submit() {
    // setNewData({ name: nameRef.current.value, img: imgRef.current.value });
    if (newData.name && newData.img) {
      newLoopy(newData);
    }
  }

  const { mutate: newLoopy } = useMutation(postRPData, {
    onSuccess: (res) => {
      console.log("성공");
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <UploadPageWrapper>
      <p>이름</p>
      <input type="text" ref={nameRef} onChange={getName} />
      <p>이미지</p>
      <input type="text" ref={imgRef} onChange={getImg} />
      <Button type="button" onClick={submit}>
        확인
      </Button>
    </UploadPageWrapper>
  );
}

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
