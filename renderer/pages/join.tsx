import React, { useState } from 'react';
import Head from 'next/head';

import { JoinBox, JoinTitle, JoinForm } from '../components/Join';
import { Input, Button, LinkButton, ErrorMsg } from '../common/ui';
import { fJoin } from '../../firebase/app';

function Join() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const setJoinValue = e => {
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
        <title>회원 가입 창</title>
      </Head>
      <JoinBox>
        <JoinTitle>회원가입</JoinTitle>
        <JoinForm
          onSubmit={e => {
            e.preventDefault();
            fJoin(email, password, setErrorMsg);
          }}>
          <Input
            name="이메일"
            placeholder="이메일"
            value={email}
            onChange={setJoinValue}
            required
          />
          <Input
            name="비밀번호"
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={setJoinValue}
            required
          />
          <ErrorMsg text={errorMsg} />
          <Button text="가입" type="submit" />
        </JoinForm>
        <LinkButton href="/login" text="로그인 화면으로"></LinkButton>
      </JoinBox>
    </React.Fragment>
  );
}

export default Join;
