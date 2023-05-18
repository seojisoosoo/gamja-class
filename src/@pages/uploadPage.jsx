import React, { useRef, useState } from "react";
import { styled } from "styled-components";

export default function UploadPage() {
  const [newData, setNewData] = useState({ name: "", img: "" });

  const nameRef = useRef(null);
  const imgRef = useRef(null);

  function getName(e) {
    setNewData((prev) => ({ ...prev, name: e.target.value }));
  }

  function getImg(e) {
    setNewData((prev) => ({ ...prev, img: e.target.value }));
  }

  console.log(newData);

  return (
    <UploadPageWrapper>
      <p>이름</p>
      <input type="text" ref={nameRef} onChange={getName} />
      <p>이미지</p>
      <input type="text" ref={imgRef} onChange={getImg} />
      <Button type="button">확인</Button>
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
