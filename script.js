// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCliiBteBNPT8yKZ_nR9GdFxm691pQpZF4",
  authDomain: "tela-login-8491e.firebaseapp.com",
  projectId: "tela-login-8491e",
  storageBucket: "tela-login-8491e.firebasestorage.app",
  messagingSenderId: "584109103659",
  appId: "1:584109103659:web:508917f03aecac18c8a86e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function login() {
    const email = document.getElementById("email").value;
    const senha = document.getElementById("senha").value;
    const msg = document.getElementById("mensagem").value;

    auth.signInWitEmailAndPassword(email,senha)
        .then(() => {
            msg.innerText = "Login realizado com sucesso!";
            msg.style.color= "green";
        })
        .catch(error => {
            msg.innerText = error.mensagem;
            mag.style.color = "red";
        })
}