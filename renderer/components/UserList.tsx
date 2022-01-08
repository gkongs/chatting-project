import styled from '@emotion/styled';
import ProfileUI from './ProfileUI';

function UserList() {
  return (
    <StyledUserList>
      <ProfileUI />
    </StyledUserList>
  );
}

export default UserList;

const StyledUserList = styled.div`
  width: 200px;
  height: 100vh;
  background-color: thistle;
`;
