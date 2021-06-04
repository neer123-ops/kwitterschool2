 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCEJ2DPZqBSWqccBqBu9QDCJHJ6EIF2J8Y",
    authDomain: "schoolkwitter.firebaseapp.com",
    projectId: "schoolkwitter",
    storageBucket: "schoolkwitter.appspot.com",
    messagingSenderId: "215127543872",
    appId: "1:215127543872:web:266323c418d0ec19360fa5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addUser(){
    studentname=document.getElementById("student_name").value;
    localStorage.setItem("student_name", studentname );
    window.location = "kwitter_room.html"
}

