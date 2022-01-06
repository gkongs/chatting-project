import React, { useState } from 'react';
import Head from 'next/head';

import { JoinBox, JoinTitle, JoinForm } from '../components/Join';
import { Input, Button, LinkButton, ErrorMsg } from '../common/ui';
import { fJoin } from '../../firebase/app';

function SetProfile() {
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
        <title>프로필 설정</title>
      </Head>
      <JoinBox>
        <JoinTitle>프로필 설정</JoinTitle>
        <JoinForm
          onSubmit={e => {
            e.preventDefault();
            fJoin(email, password, setErrorMsg);
          }}>
          <Input
            name="이름"
            placeholder="이름"
            value={email}
            onChange={setJoinValue}
            required
          />
          <label htmlFor="photoInput"> 이미지 선택 </label>
          <Input
            style={{ display: 'none' }}
            id="photoInput"
            name="프로필사진"
            type="file"
            value={email}
            required
          />
          <ErrorMsg text={errorMsg} />
          <Button text="설정" type="submit" />
        </JoinForm>
      </JoinBox>
    </React.Fragment>
  );
}

export default SetProfile;
