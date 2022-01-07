import { initializeApp } from 'firebase/app';
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

export const fLogin = (email, password, setErrorMsg) => {
  console.log('ds');

  signInWithEmailAndPassword(auth, email, password)
    .then(userCredential => {
      const { displayName: name, photoURL: photo } = userCredential.user;

      // default profile이 정해져 있지 않다면 (최초 로그인)
      // profile 설정화면으로
      if (!name) {
        Router.push('/setProfile');
      } else {
        storageSetUserInfo('name', name);
        storageSetUserInfo('photo', photo);
        Router.push('/userList');
      }
    })
    .catch(error => {
      setErrorMsg(fAuthError(error.code));
    });
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

export const fCurrentUser = () => {
  const auth = getAuth(fApp);
  const user = auth.currentUser;
  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;
    const uid = user.uid;

    return { name: displayName, photo: photoURL };
  }
};
