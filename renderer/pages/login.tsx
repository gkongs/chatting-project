import React, { useState } from 'react';
import Head from 'next/head';
import { ErrorMsg, Input, LinkButton } from '../common/ui';
import {
  LoginBox,
  LoginTitle,
  LoginForm,
  LoginButton,
} from '../components/styled/Login';
import { fLogin } from '../../firebase/app';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const setLoginValue = e => {
    e.preventDefault();
    const { name, value } = e.target;

    switch (name) {
      case '이메일':
        setEmail(value);
        break;
      case '비밀번호':
        setPassword(value);
        break;
    }
  };

  return (
    <React.Fragment>
      <Head>
        <title>Tera Chat</title>
      </Head>
      <LoginBox>
        <LoginTitle>TeraChat Login</LoginTitle>
        <LoginForm
          onSubmit={e => {
            e.preventDefault();
            fLogin(email, password, setErrorMsg);
          }}>
          <Input
            name="이메일"
            placeholder="이메일"
            type="email"
            value={email}
            onChange={setLoginValue}
            required
          />
          <Input
            name="비밀번호"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={setLoginValue}
            required
          />
          <ErrorMsg text={errorMsg} />
          <LoginButton type="submit">로그인</LoginButton>
        </LoginForm>

        <p>아직 회원이 아니신가요?</p>
        <LinkButton href="/join" text="회원가입" />
      </LoginBox>
    </React.Fragment>
  );
}

export default Login;
