import React, { useState } from "react";
import { userLogin } from "../api/login";
import { useMutation } from "react-query";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const [cookies, setCookie, removeCookie] = useCookies(["accessToken"]);

  function getEmail(e) {
    setLoginData((prev) => ({ ...prev, email: e.target.value }));
  }

  function getPassword(e) {
    setLoginData((prev) => ({ ...prev, password: e.target.value }));
  }

  function submitLogin() {
    if (loginData.email && loginData.password) {
      login(loginData);
    }
  }

  const { mutate: login } = useMutation(userLogin, {
    onSuccess: (response) => {
      console.log(response);
      window.sessionStorage.setItem("accessToken", response.data);
      navigate("/card");
    },
    onError: (error) => {
      if (error.message === "Request failed with status code 500") {
        alert("잘못된 유저입니다.");
      }
    },
  });

  return (
    <LoginPageWrapper>
      <p>이메일</p>
      <input type="email" onChange={getEmail} />
      <p>패스워드</p>
      <input type="password" onChange={getPassword} />

      <Button type="button" onClick={submitLogin}>
        확인
      </Button>
    </LoginPageWrapper>
  );
}

const LoginPageWrapper = styled.section`
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
