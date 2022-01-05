import styled from '@emotion/styled';
import * as styleUtils from '../common/styles/uilts';

export const JoinBox = styled.div`
  ${styleUtils.centerContainer}
  gap: 10px;
`;

export const JoinTitle = styled.h1`
  ${styleUtils.basicH1}
  margin-bottom: 30px;
`;

export const JoinForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    height: 10px;
  }
`;
