import React, { useRef, useState } from "react";
import MainHeader from "../@components/common/mainHeader";
import Footer from "../@components/common/footer";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";

export default function PostPage() {
  const nameRef = useRef(null);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  function writeName(e) {
    setName(e.target.value);
    console.log(e.target.value);
  }

  function submitName() {
    console.log(nameRef.current.value);
  }

  function moveToBack() {
    navigate(-1);
  }

  return (
    <>
      <button type="button" onClick={moveToBack}>
        🌷뒤로가기
      </button>
      <InputWrapper>
        <Input type="text" placeholder="이름을 입력하세요" onChange={writeName} ref={nameRef} />
        <Button type="button" onClick={submitName}>
          확인
        </Button>
      </InputWrapper>
    </>
  );
}

const InputWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 20rem;
  height: 20rem;

  background-color: skyblue;
`;

const Input = styled.input`
  border: 0.1rem solid blue;
`;

const Button = styled.button`
  padding: 1rem;
  margin: 1rem;
`;
