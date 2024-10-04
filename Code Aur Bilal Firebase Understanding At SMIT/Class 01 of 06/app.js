// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDAZ7mHVVtVcYx2la9uSGVdtz0RAFjG6E",
  authDomain: "fir-b-11-mod-02-class-01.firebaseapp.com",
  projectId: "fir-b-11-mod-02-class-01",
  storageBucket: "fir-b-11-mod-02-class-01.appspot.com",
  messagingSenderId: "111592329195",
  appId: "1:111592329195:web:324efedf77db89251893ae",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Accessing the dom elements of the html in firebase

const signUpButton = document.getElementById("signUpBtn");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");

// Accessing Sign In Elements

const signInButton = document.getElementById("signInBtn");
const signInEmail = document.getElementById("signInEmail");
const signInPassword = document.getElementById("signInPassword");
const logoutBtn = document.getElementById("logoutBtn");

signUpButton.addEventListener("click", AccBanao);

signInButton.addEventListener("click", SignInFunc);

logoutBtn.addEventListener("click", LogOutkarDo);

// Now here we need to access the containers , in order to print the data inside it

const beforeLogin = document.getElementById("beforeLogin");

const afterLogin = document.getElementById("LoginContainer");

const userEmailFirebase = document.getElementById("userEmailFirebase");

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("User is available");
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;

    beforeLogin.style.display = "none";

    userEmailFirebase.innerText = user.email;

    console.log(user);

    // ...
  } else {
    console.log("User is not available");
    // User is signed out
    // ...

    beforeLogin.style.display = "block";
    afterLogin.style.display = "none";
  }
});

function AccBanao() {
  afterLogin.style.display = "none";
  console.log(signUpEmail.value);
  console.log(signUpPassword.value);

  //   createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       console.log("user ---> ", user);
  //       // ...
  //     })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;

  //   alert(errorMessage);

  //   // ..
  // });

  createUserWithEmailAndPassword(auth, signUpEmail.value, signUpPassword.value)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
      // ..
    });
}

function SignInFunc() {
  signInWithEmailAndPassword(auth, signInEmail.value, signInPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log("Successfully Signed In");
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function LogOutkarDo() {
  signOut(auth)
    .then(() => {
      // Sign-out successful.
      alert("User Logged Out");
    })
    .catch((error) => {
      // An error happened.
    });
}
