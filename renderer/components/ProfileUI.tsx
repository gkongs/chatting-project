import styled from '@emotion/styled';
import { UserImage } from '../common/ui';

function ProfileUI({ id, name, photo, setCurrentPartnerId = null }) {
  return (
    <StyledProfileUI
      onClick={() => {
        if (setCurrentPartnerId) return setCurrentPartnerId(id);
      }}>
      <UserImage src={photo} />
      <h1>{name}</h1>
    </StyledProfileUI>
  );
}

export default ProfileUI;

const StyledProfileUI = styled.div`
  display: flex;
  align-items: center;
  width: 180px;
  padding: 10px;
  cursor: pointer;

  img {
    margin-right: 10px;
  }
`;
