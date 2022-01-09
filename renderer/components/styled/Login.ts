import styled from '@emotion/styled';
import * as styleUtils from '../../common/styles/uilts';

export const LoginBox = styled.div`
  ${styleUtils.centerContainer}
`;

export const LoginTitle = styled.h1`
  ${styleUtils.basicH1}
  margin-bottom: 30px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;

  p {
    height: 10px;
  }
`;

export const LoginButton = styled.button`
  ${styleUtils.normalBox}
  margin: 5px 0 20px 0;
`;
