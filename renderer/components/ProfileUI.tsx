import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { getUserData } from '../../firebase/app';
import { UserImage } from '../common/ui';
import { centerContainer } from '../common/styles/uilts';

function ProfileUI() {
  const [userProfile, setUserProfile]: any = useState({
    name: null,
    photo: null,
  });

  useEffect(() => {
    getUserData().then(({ name }) => setUserProfile({ name }));
  }, [userProfile]);

  return (
    <StyledProfileUI>
      <UserImage />
      <h1>{userProfile.name}</h1>
    </StyledProfileUI>
  );
}

export default ProfileUI;

const StyledProfileUI = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  padding: 10px;
  background-color: whitesmoke;

  img {
    margin-right: 10px;
  }
`;
