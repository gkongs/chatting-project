import React, { useState } from 'react';
import Head from 'next/head';

import { JoinBox, JoinTitle, JoinForm } from '../components/styled/Join';
import { Input, Button, UserImage, InputLabel } from '../common/ui';
import { writeUserData } from '../../firebase/app';

function SetProfile() {
  const [name, setName] = useState('');
  const [imgBase64, setImgBase64] = useState(null);

  const setProfileValue = e => {
    e.preventDefault();
    const { name, value } = e.target;
    switch (name) {
      case '이름':
        setName(value);
        break;
    }
  };

  const updateSumnail = e => {
    var file = e.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function (e) {
      setImgBase64(reader.result);
    };
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
            writeUserData(name, imgBase64);
          }}>
          <Input
            name="이름"
            placeholder="이름"
            value={name}
            onChange={setProfileValue}
            required
          />
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '10px',
            }}>
            <UserImage src={imgBase64} />
            <InputLabel text="이미지 불러오기 📄" htmlFor="photoInput" />
          </div>
          <Input
            style={{ display: 'none' }}
            id="photoInput"
            name="프로필사진"
            type="file"
            accept="image/*"
            onChange={updateSumnail}
            required
          />
          <Button text="설정" type="submit" />
        </JoinForm>
      </JoinBox>
    </React.Fragment>
  );
}

export default SetProfile;
