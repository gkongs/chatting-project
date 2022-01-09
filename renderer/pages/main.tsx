import UserList from '../components/UserList';
import Chat from '../components/Chat';
import {
  fCurrentUserId,
  getAllUsersData,
  writeChatMsg,
} from '../../firebase/app';
import { useEffect, useState } from 'react';

function Main() {
  const [currentPartnerId, setCurrentPartnerId] = useState();
  const [userProfiles, setUserProfiles] = useState([]);

  useEffect(() => {
    getAllUsersData().then(res => {
      setUserProfiles(Object.entries(res));
    });
  }, []);

  const getMyInfo = () => {
    if (fCurrentUserId())
      return userProfiles.find(datas => fCurrentUserId() === datas[0]);
  };
  const getPartnerInfo = () => {
    return userProfiles.find(datas => currentPartnerId === datas[0]);
  };

  return (
    <div style={{ display: 'flex' }}>
      <UserList
        userProfiles={userProfiles}
        setUserProfiles={setUserProfiles}
        setCurrentPartnerId={setCurrentPartnerId}
      />
      <Chat type="one" myInfo={getMyInfo()} targetInfo={getPartnerInfo()} />
    </div>
  );
}

export default Main;
