import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import { seedDatabase } from "./seed";

const configApp = {
  apiKey: "AIzaSyB-l4yQqMgU3tnwfJYCFmnIu2YBm_X4ggo",
  authDomain: "netfix-clone-33168.firebaseapp.com",
  projectId: "netfix-clone-33168",
  storageBucket: "netfix-clone-33168.appspot.com",
  messagingSenderId: "796395688155",
  appId: "1:796395688155:web:a1f91f2215b0507de73cfe",
};
const firebase = Firebase.initializeApp(configApp);

/* import database to fire stores */
/* seedDatabase(firebase); */

export { firebase };
