import axios from "axios";
import queryString from "query-string";
import firebase from "firebase/compat/app";

const getFirebaseToken = async () => {
  const currentUser = firebase.auth().currentUser;
  if (currentUser) return currentUser.getIdToken;
  const hasRememberAccount = localStorage.getItem(
    "firebaseui::rememberAccount"
  );
  if (!hasRememberAccount) return console.log("nothing");
  return new Promise<any>((resolve, reject) => {
    const waitTimer = setTimeout(() => {
      reject(null);
      console.log("reject");
    }, 10000);
    const unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(async (user: any) => {
        if (!user) {
          reject(null);
        }

        const token = await user.getIdToken();
        console.log("[Axios]token", token);
        resolve(token);

        unregisterAuthObserver();
        clearTimeout(waitTimer);
      });
  });
};
const axiosClient = axios.create({
  baseURL: "http://localhost:3000",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

axiosClient.interceptors.request.use(async (config: any) => {
  // const currentUser = firebase.auth().currentUser;
  // if(currentUser){
  //     const token = await currentUser.getIdToken();
  //     config.headers.Authorization = `Bearer ${token}`;
  // }
  const token = await getFirebaseToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // Handle errors
    throw error;
  }
);

export default axiosClient;
