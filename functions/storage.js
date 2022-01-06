export const storageSetUserInfo = (type, info) => {
  switch (type) {
    case 'name':
      localStorage.setItem(keys.name, info);
      break;
    case 'photo':
      localStorage.setItem(keys.photo, info);
      break;
  }
};

export const storageGetUserInfo = (type, info) => {
  switch (type) {
    case 'name':
      localStorage.getItem(keys.name);
      break;
    case 'photo':
      localStorage.getItem(keys.photo);
      break;
  }
};

const keys = {
  name: 'userName',
  photo: 'userphoto',
};
