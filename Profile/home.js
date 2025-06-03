
// https://github.com/mabdullahjs/React-BoilerPlate/blob/master/src/config/Firebase/firebaseMethod.js

import { onAuthStateChanged, signOut, sendSignInLinkToEmail } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
import { auth, db } from "../Firebase/config.js";
import { collection, addDoc, getDocs, Timestamp, query, orderBy } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js";

const form = document.querySelector('#form');
const title = document.querySelector('#title');
const description = document.querySelector('#description');
const card = document.querySelector('#card');

// user login  or logout function
onAuthStateChanged(auth, (user) => {
    if (user) {
        const uid = user.uid;
        console.log(uid);
    } else {
        window.location = 'index.html';
    }
});

const logout = document.querySelector('#logout-btn');
logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        console.log("Logout Successfully.");
        window.location = '../index.html';
    }).catch((error) => {
        console.log(error);
    });
});

// Decrypt Library (DECRSTLIB)
// get data from firestore
let arr = [];
const getDataFromFirestore = async () => {
    arr.length = 0;
    const collectionRef = collection(db, "posts");
    const q = query(collectionRef, orderBy('postDate', 'desc'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        arr.push({...doc.data(), docId: doc.id});
    });
    console.log(arr);
    console.log(auth.currentUser.email);
    card.innerHTML = "";
    arr.map((item) => {
        card.innerHTML += `
        <div class="card mt-2">
            <div class="card-body">
                <p><span class="h5">Title</span>: ${item.title}</p>
                <p><span class="h5">Description</span>: ${item.description}</p>
                <button type="button" id="update" class="btn btn-info">Edit</button>
                <button type="button" id="delete" class="btn btn-danger">Delete</button>
            </div>
        </div>
        `;
    });
    const del = document.querySelectorAll('#delete');
    const upd = document.querySelectorAll('#update');
    console.log(del);
    console.log(upd);
    del.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log("delete called", arr[index]);
        });
    });
    upd.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            console.log("update called", arr[index]);
        });
    });
}

getDataFromFirestore();

// Post data on firestore
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    try {
        const docRef = await addDoc(collection(db, "posts"), {
            title: title.value,
            description: description.value,
            uid: auth.currentUser.uid,
            postDate: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
        getDataFromFirestore();
    } catch (e) {
        console.error("Error adding document: ", e);
    }
});




const emailButton = document.querySelector('#email-button');

// emailButton.addEventListener('click', () => {
//     sendSignInLinkToEmail(auth, auth.currentUser.email, actionCodeSettings)
//     .then(() => {
//         // The link was successfully sent. Inform the user.
//         // Save the email locally so you don't need to ask the user for it again
//         // if they open the link on the same device.
//         window.localStorage.setItem('emailForSignIn', email);
//         console.log("Done");
//     })
//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorMessage);
//     });
// });

// media library
// cloudinary
