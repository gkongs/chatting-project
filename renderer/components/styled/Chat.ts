import styled from '@emotion/styled';

export const StyledChat = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ChatTop = styled.div`
  flex: 0.5;
  background-color: dimgray;
`;

export const ChatMain = styled.div`
  flex: 8;
  background-color: darkgray;

  h1 {
    height: 20px;
  }
`;

export const ChatBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1.5;
  background-color: dimgray;

  form {
    display: flex;
  }

  input {
    width: 300px;
    outline: darkgray;
  }

  button {
    width: 50px;
    background-color: darkgray;
  }
`;
