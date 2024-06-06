import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAhBzSScnaF9_DaVXP-8rFKL15iNGi2yr0",
  authDomain: "rec-center-app.firebaseapp.com",
  projectId: "rec-center-app",
  storageBucket: "rec-center-app.appspot.com",
  messagingSenderId: "255800737570",
  appId: "1:255800737570:web:ecd1effae24bebf3eaef7b",
  measurementId: "G-PV9L6K6TNQ"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export default app; 