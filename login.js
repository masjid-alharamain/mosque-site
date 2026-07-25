import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCu9C_dF63ZvZEmX7kX3p_bjiVHtqDOmbA",
  authDomain: "masjid-alharamain.firebaseapp.com",
  projectId: "masjid-alharamain",
  storageBucket: "masjid-alharamain.firebasestorage.app",
  messagingSenderId: "727619819927",
  appId: "1:727619819927:web:490f0c39b2db9a31e94cd2"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.getElementById("loginBtn").addEventListener("click", () => {

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "admin.html";
    })
    .catch((error) => {
    alert(error.code);
    document.getElementById("error").innerText = error.message;
});

});