import React, { useRef, useState } from "react";
import { useMutation } from "react-query";
import { styled } from "styled-components";
import { postData } from "../api/postData";
import { useNavigate } from "react-router-dom";

export default function UploadPage() {
  const [newData, setNewData] = useState({
    name: "",
    img: "",
  });

  const nameRef = useRef(null);
  const imgRef = useRef(null);

  function getName(e) {
    setNewData((prev) => ({ ...prev, name: e.target.value }));
  }

  function getImg(e) {
    setNewData((prev) => ({ ...prev, img: e.target.value }));
  }

  function submitNewData() {
    if (newData.name && newData.img) {
      newLoopy(newData);
    }
    // setNewData({ name: nameRef.current.value, img: imgRef.current.value });
  }

  const navigate = useNavigate();

  const { mutate: newLoopy } = useMutation(postData, {
    onSuccess: (response) => {
      console.log(response);
      navigate("/");
    },
    onError: () => {},
  });

  console.log(newData);

  return (
    <UploadPageWrapper>
      <p>이름</p>
      <input type="text" onChange={getName} ref={nameRef} />
      <p>이미지</p>
      <input type="text" onChange={getImg} ref={imgRef} />
      <Button type="button" onClick={submitNewData}>
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
