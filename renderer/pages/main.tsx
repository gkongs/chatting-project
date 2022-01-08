import { fCurrentUser } from '../../firebase/app';
import UserList from '../components/UserList';
function Main() {
  return (
    <div>
      <UserList />
    </div>
  );
}

export default Main;
