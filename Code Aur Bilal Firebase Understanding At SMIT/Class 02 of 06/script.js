import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.14.0/firebase-analytics.js";
import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/10.14.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBSYVg4xJkx2ho1Z0I1ncy47VlY5x2xUEQ",
  authDomain: "fir-b11-firestore-class-2.firebaseapp.com",
  projectId: "fir-b11-firestore-class-2",
  storageBucket: "fir-b11-firestore-class-2.appspot.com",
  messagingSenderId: "10667549693",
  appId: "1:10667549693:web:355e5fbe93572e73586f94",
  measurementId: "G-GW21024ME1",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

console.log(`Data ===> `, db);

const analytics = getAnalytics(app);

// Access the html elements for todo list

let todoInput = document.getElementById("todo_input");
let addTodoBtn = document.getElementById("addTodoBtn");

// Here we are also required to create todos collection to save it in a data base

let todosCollection = collection(db, "todosName");

addTodoBtn.addEventListener("click", AddTodoToDB);

async function AddTodoToDB() {
  try {
    const todosName = {
      todo: todoInput.value,
      createdAt: new Date().toISOString(),
    };

    // This has been used to save the document

    const docRef = await addDoc(todosCollection, todosName);

    console.log("todos --- ", docRef);
  } catch (e) {
    console.log("error is =", e);
  }
}

// async function addNumberToDB() {
//   try {
//     let numberCollection = collection(db, "numbers");

//     const docRef = await addDoc(numberCollection, {
//       number: Math.round(Math.random() * 100),
//     });

//     console.log("number is = ", docRef);

//     console.log("Document written with ID: ", docRef.id);
//   } catch (e) {
//     console.error("Error adding document: ", e);
//   }
// }
