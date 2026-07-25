import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getFirestore,
  doc,
  getDoc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

// إعدادات Firebase
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
const db = getFirestore(app);

const ref = doc(db, "project", "main");

onAuthStateChanged(auth, (user) => {

    if (!user) {
        window.location.href = "login.html";
    }

});

// قراءة البيانات
async function loadData() {
  const snap = await getDoc(ref);

  if (snap.exists()) {
    const data = snap.data();

    document.getElementById("goal").value = data.goal;
    document.getElementById("collected").value = data.collected;
    document.getElementById("donors").value = data.donors;
    document.getElementById("progress").value = data.progress;
  }
}

loadData();

// حفظ البيانات
document.getElementById("save").onclick = async () => {

  await updateDoc(ref, {
    goal: Number(document.getElementById("goal").value),
    collected: Number(document.getElementById("collected").value),
    donors: Number(document.getElementById("donors").value),
    progress: Number(document.getElementById("progress").value)
  });

  alert("تم حفظ التعديلات بنجاح");
};

document.getElementById("logout").onclick = async () => {

    await signOut(auth);

    window.location.href = "login.html";

};