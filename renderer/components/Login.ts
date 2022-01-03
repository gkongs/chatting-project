import styled from '@emotion/styled';
import * as styleUtils from '../styles/uilts';

export const LoginBox = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LoginTitle = styled.h1`
  ${styleUtils.basicH1}
  margin-bottom: 30px;
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
`;

export const LoginInput = styled.input`
  ${styleUtils.basicInput}
  width: 200px;
`;

export const LoginButton = styled.button`
  margin: 5px 0 20px 0;
  width: 200px;
  height: 25px;
`;
