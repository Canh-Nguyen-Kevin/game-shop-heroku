import firebase from "firebase/compat/app";

const userApi = {
  getMe: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          //    id: currentUser.uid,
          //    name:currentUser.name,
          //    email:currentUser.email,
          //    photoUrl:currentUser.photoUrl,
        });
      }, 500);
    });
  },
};
export default userApi;
