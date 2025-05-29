
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";

import { auth } from "../Firebase/config.js";

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const loginForm = document.querySelector('#loginForm');
const loginEmail = document.querySelector('#loginEmail');
const loginPassword = document.querySelector('#loginPassword');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            window.location = "./Profile/home.html";
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});


// Handle Registration

const registrationForm = document.querySelector('#registrationForm');
const registerEmail = document.querySelector('#registerEmail');
const registerPassword = document.querySelector('#registerPassword');

registrationForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, registerEmail.value, registerPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            registerEmail.value = "";
            registerPassword.value = "";
            window.location = '../index.html';
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
});




const user = {
    name: 'mabdullahjs',
    email: 'mabdullah@gmail.com'
}







// https://sweetalert2.github.io/
// cash me show



// let spaces = "";
// let stars = "";

// let i = 0;

// while (i < 3) {
//     let j = 0;
//     while (j < 3-i) {
//         spaces += ' ';
//         j++;
//     }
//     let k = 0;
//     while (k < i+1) {
//         stars += '*';
//         k++;
//     }
//     console.log(spaces + stars);
//     spaces = "";
//     stars = "";
//     i++;
// }



