import React from "react";
import { userLogin } from "../api/login";

export default function LoginPage() {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  function getEmail(e) {
    setLoginData((prev) => ({ ...prev, email: e.target.value }));
  }

  function getPassword(e) {
    setLoginData((prev) => ({ ...prev, password: e.target.value }));
  }

  function submitLogin() {
    if (loginData.name && loginData.img) {
      login(loginData);
    }
  }

  const { mutate: login } = useMutation(userLogin, {
    onSuccess: (response) => {
      console.log(response);
      navigate("/");
    },
    onError: (error) => {
      console.log(error);
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