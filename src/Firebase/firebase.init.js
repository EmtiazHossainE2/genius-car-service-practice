// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDds8XVknbJnz7RxQI9IE_PPwGVwqW77Hw",
    authDomain: "genius-car-service-310.firebaseapp.com",
    projectId: "genius-car-service-310",
    storageBucket: "genius-car-service-310.appspot.com",
    messagingSenderId: "824384645939",
    appId: "1:824384645939:web:1f265797a4ad57790dec46"
  };

// const firebaseConfig = {
//   apiKey:process.env.REACT_APP_apiKey,
//   authDomain:process.env.REACT_APP_authDomain,
//   projectId:process.env.REACT_APP_projectId,
//   storageBucket:process.env.REACT_APP_storageBucket,
//   messagingSenderId:process.env.REACT_APP_messagingSenderId,
//   appId:process.env.REACT_APP_appId,
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth ;