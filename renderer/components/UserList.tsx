import styled from '@emotion/styled';
import React from 'react';
import ProfileUI from './ProfileUI';

function UserList({ userProfiles, setCurrentPartnerId }) {
  return (
    <StyledUserList>
      <UserListTitle>유저 목록</UserListTitle>
      {userProfiles.map((datas, idx) => (
        <ProfileUI
          id={datas[0]}
          key={idx}
          setCurrentPartnerId={setCurrentPartnerId}
          {...datas[1]}
        />
      ))}
    </StyledUserList>
  );
}

export default UserList;

const StyledUserList = styled.div`
  width: 200px;
  height: 100vh;
  border: 1px solid grey;
`;

const UserListTitle = styled.div`
  font-weight: bold;
  background-color: dimgray;
  border-bottom: 1px solid grey;
  text-align: center;
`;
