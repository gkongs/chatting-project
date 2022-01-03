import React from 'react';
import Head from 'next/head';
import {
  LoginBox,
  LoginTitle,
  LoginForm,
  LoginInput,
  LoginButton,
} from '../components/Login';

function Login() {
  return (
    <React.Fragment>
      <Head>
        <title>Tera Chat</title>
      </Head>
      <LoginBox>
        <LoginTitle>TeraChat Login</LoginTitle>
        <LoginForm>
          <LoginInput placeholder="아이디"></LoginInput>
          <LoginInput placeholder="비밀번호"></LoginInput>
          <LoginButton>로그인</LoginButton>
        </LoginForm>

        <p>아직 회원이 아니신가요?</p>
        <LoginButton>회원가입</LoginButton>
      </LoginBox>
    </React.Fragment>
  );
}

export default Login;
