import React, { useState } from 'react';
import { StyledChat, ChatTop, ChatMain, ChatBottom } from './styled/Chat';
import { writeChatMsg } from '../../firebase/app';
function Chat({ type, myInfo, targetInfo }) {
  const [msg, setMsg] = useState([]);

  const sendMsg = e => {
    e.preventDefault();
    const { value } = e.target[0];
    setMsg([value, ...msg]);
    e.target[0].value = '';
    if (!targetInfo) window.alert('메시지 보낼 상대를 정해주세요');
    else {
      writeChatMsg(targetInfo[0], [value, ...msg]);
    }
  };

  return (
    <StyledChat>
      <ChatTop>
        {targetInfo
          ? `${targetInfo[1].name}과의 대화`
          : '상대방을 클릭해 대화를 나눠보세요'}
      </ChatTop>
      <ChatMain>{msg}</ChatMain>
      <ChatBottom>
        <form onSubmit={sendMsg}>
          <input name="msg" />
          <button type="submit">보내기</button>
        </form>
      </ChatBottom>
    </StyledChat>
  );
}
export default Chat;
