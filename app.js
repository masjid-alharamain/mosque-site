// Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCu9C_dF63ZvZEmX7kX3p_bjiVHtqDOmbA",
  authDomain: "masjid-alharamain.firebaseapp.com",
  projectId: "masjid-alharamain",
  storageBucket: "masjid-alharamain.firebasestorage.app",
  messagingSenderId: "727619819927",
  appId: "1:727619819927:web:490f0c39b2db9a31e94cd2"
};

// تشغيل Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// قراءة البيانات
async function loadProject() {

    const ref = doc(db, "project", "main");
    const snap = await getDoc(ref);

    if (!snap.exists()) return;

    const data = snap.data();

    document.getElementById("goal").innerText =
        data.goal.toLocaleString() + " دج";

    document.getElementById("collected").innerText =
        data.collected.toLocaleString() + " دج";

    document.getElementById("donors").innerText =
        data.donors;

    document.getElementById("progress").innerText =
        data.progress + "%";
        
   document.getElementById("progress-bar").style.width =
    data.progress + "%";
        
        

    document.getElementById("mosque-name").innerText =
        data.mosqueName;
}

loadProject();