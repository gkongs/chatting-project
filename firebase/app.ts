import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set, onValue } from 'firebase/database';
import { getAnalytics } from 'firebase/analytics';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import dotenv from 'dotenv';
import Router from 'next/router';
import { storageSetUserInfo, storageGetUserInfo } from '../functions/storage';

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKEY,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
export const fApp = initializeApp(firebaseConfig);
const db = getDatabase(fApp);
const auth = getAuth(fApp);

const fAuthError = errorCode => {
  console.log(errorCode);
  switch (errorCode) {
    case 'auth/weak-password': {
      return '비밀번호는 8자리 이상 적어주세요.';
    }
    case `auth/invalid-email`: {
      return '이메일 형식이 잘못되었습니다.';
    }
    case 'auth/email-already-in-use': {
      return '이미 존재하는 이메일 입니다..';
    }
    case 'auth/user-not-found': {
      return '해당 이메일은 존재하지 않습니다.';
    }
    case 'auth/wrong-password': {
      return '비밀번호가 일치하지 않습니다.';
    }
  }
};

export const fJoin = (email, password, setErrorMsg) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      Router.push('/login');
    })
    .catch(error => {
      setErrorMsg(fAuthError(error.code));
    });
};

export const fLogin = async (email, password, setErrorMsg) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const data = await getUserData();
    if (!data) {
      Router.push('/setProfile');
    } else {
      Router.push('/main');
    }
  } catch (error) {
    setErrorMsg(fAuthError(error.code));
  }
};

export const fUpdateProfile = (name, photoURL) => {
  updateProfile(auth.currentUser, {
    displayName: name,
    photoURL: photoURL,
  })
    .then(() => {
      Router.push('/userList');
    })
    .catch(error => {
      console.log(error.message);
      // An error occurred
      // ...
    });
};

// export const fCurrentUser = () => {
//   const auth = getAuth(fApp);
//   const user = auth.currentUser;
//   if (user !== null) {
//     const displayName = user.displayName;
//     const photoURL = user.photoURL;

//     return { name: displayName, photo: photoURL };
//   }
// };

export const writeUserData = (name, photo) => {
  set(ref(db, 'users/' + auth.currentUser.uid), {
    name,
    photo,
  });
  Router.push('/main');
};

export const getUserData = async () => {
  const profile = ref(db, 'users/' + auth.currentUser.uid);
  return new Promise(function (resolve, reject) {
    onValue(profile, snapshot => {
      resolve(snapshot.val());
    });
  });
};
