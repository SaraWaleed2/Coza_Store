 ///////////////////////////////login ui///////////////////////////////////////
// let signupBtn = document.getElementById('signupBtn');
// let signinBtn = document.getElementById('signinBtn');
// let nameFeild = document.getElementById('nameFeild');
// let title = document.getElementById('title');
// signinBtn.onclick = function () {
//     nameFeild.style.maxHeight = "0";
//     title.innerHTML = "Sign In";
//     signupBtn.classList.add("disable-btn");
//     signinBtn.classList.remove("disable-btn");

// }
// signupBtn.onclick = function () {
//     nameFeild.style.maxHeight = "60px";
//     title.innerHTML = "Sign Up";
//     signinBtn.classList.add("disable-btn");
//     signupBtn.classList.remove("disable-btn");

// }

// ////////////////////////////////////////////firebase//////////////////////////////
// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
// import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//     apiKey: "AIzaSyB39PQ_AJNW2x54fSywR-82kenIwh5-PDk",
//     authDomain: "e-commerce-f5b80.firebaseapp.com",
//     projectId: "e-commerce-f5b80",
//     storageBucket: "e-commerce-f5b80.appspot.com",
//     messagingSenderId: "982196182478",
//     appId: "1:982196182478:web:9543ac88327a0bf3229f9f"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// var username = document.getElementById('username');
// var email = document.getElementById('email');
// var password = document.getElementById('password');
// window.signup = function (e) {
//     e.preventDefault();
//     var obj = {
//         username: username.value,
//         email: email.value,
//         password: password.value,
//     };
//     createUserWithEmailAndPassword(auth, obj.email, obj.password)
//         .then(function (success) {
//             alert("signup seccessfully");
//         })
//         .catch(function (err) {
//             alert("ERROR" + err);
//         });
//     console.log(obj)
// };




        // Import the functions you need from the SDKs you need
        // import { initializeApp } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-app.js";
        // import { getDatabase, set, ref, update } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-database.js";
        // import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.4.0/firebase-auth.js";
        // // TODO: Add SDKs for Firebase products that you want to use
        // // https://firebase.google.com/docs/web/setup#available-libraries

        // // Your web app's Firebase configuration
        // const firebaseConfig = {
        //     apiKey: "AIzaSyCxWm2bZSnruTOl1-ftCJvj7v_6s1s18QY",
        //     authDomain: "e-commerce-2a574.firebaseapp.com",
        //     databaseURL: "https://e-commerce-2a574-default-rtdb.firebaseio.com",
        //     projectId: "e-commerce-2a574",
        //     storageBucket: "e-commerce-2a574.appspot.com",
        //     messagingSenderId: "691245535252",
        //     appId: "1:691245535252:web:dd016142ec4519e1915701"
        // };

        // // Initialize Firebase
        // const app = initializeApp(firebaseConfig);
        // const database = getDatabase(app);
        // const auth = getAuth();
        // signupBtn.addEventListener('click', (e) => {

        //     var email = document.getElementById('email').value;
        //     var password = document.getElementById('password').value;
        //     var username = document.getElementById('username').value;

        //     createUserWithEmailAndPassword(auth, email, password)
        //         .then((userCredential) => {
        //             // Signed in 
        //             const user = userCredential.user;

        //             set(ref(database, " users/" + user.uid), {
        //                 username: username,
        //                 email: email
        //             })

        //             alert('user created!');
        //             // ...
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             alert(errorMessage);
        //             // ..
        //         });

        // });

        // signinBtn.addEventListener('click', (e) => {
        //     var email = document.getElementById('email').value;
        //     var password = document.getElementById('password').value;
        //     signInWithEmailAndPassword(auth, email, password)
        //         .then((userCredential) => {
        //             // Signed in 
        //             const user = userCredential.user;
        //             const dt = new Date();
        //             update(ref(database, " users/" + user.uid), {
        //                 last_login: dt,
        //                 // email: email
        //             })
        //             alert('user loged!');
        //             // ...
        //         })
        //         .catch((error) => {
        //             const errorCode = error.code;
        //             const errorMessage = error.message;
        //             alert(errorMessage);
        //         });
        // });
