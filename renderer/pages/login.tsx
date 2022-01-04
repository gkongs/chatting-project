import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

import { Input, LinkButton } from '../common/ui';

import {
  LoginBox,
  LoginTitle,
  LoginForm,
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
          <Input placeholder="아이디" />
          <Input placeholder="비밀번호" />
          <LoginButton>로그인</LoginButton>
        </LoginForm>

        <p>아직 회원이 아니신가요?</p>
        <LinkButton href="/join" text="회원가입" />
      </LoginBox>
    </React.Fragment>
  );
}

export default Login;
