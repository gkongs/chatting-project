import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { JoinBox, JoinTitle, JoinForm } from '../components/Join';
import { Input, Button, LinkButton } from '../common/ui';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

function Join() {
  const saveUser = e => {
    e.preventDefault();
    console.log(e.target);
  };

  return (
    <React.Fragment>
      <Head>
        <title>회원 가입 창</title>
      </Head>
      <JoinBox>
        <JoinTitle>회원가입</JoinTitle>
        <JoinForm onSubmit={saveUser}>
          <Input name="이메일" placeholder="이메일" required />
          <Input placeholder="패스워드" type="password" required />
          <Button text="가입" />
        </JoinForm>
        <LinkButton href="/login" text="로그인 화면으로"></LinkButton>
      </JoinBox>
    </React.Fragment>
  );
}

export default Join;
