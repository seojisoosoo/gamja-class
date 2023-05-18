import React, { useEffect, useRef, useState } from "react";
import { useMutation } from "react-query";
import { userLogin } from "../api/login";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function login() {
    setUserData({ email: emailRef.current.value, password: passwordRef.current.value });
  }

  const navigate = useNavigate();

  const { mutate: goToLogin } = useMutation(userLogin, {
    onSuccess: (response) => {
      window.sessionStorage.setItem("accessToken", response.data);
      navigate("/card");
    },
    onError: (error) => {
      if (error.message === "Request failed with status code 500") {
        alert("다시 로그인해주세요.");
      }
    },
  });

  useEffect(() => {
    if (userData.email && userData.password) {
      goToLogin(userData);
    }
  }, [userData]);

  return (
    <>
      <p>이메일</p>
      <input type="email" ref={emailRef} />
      <p>패스워드</p>
      <input type="password" ref={passwordRef} />
      <button onClick={login}>확인</button>
    </>
  );
}
