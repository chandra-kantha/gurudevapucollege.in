// Initialize Firebase
var config = {
  apiKey: "AIzaSyBi45u-oorRqXT0t3Q-sOMHTH3nGJl7fAU",
  authDomain: "gurudevaschool-e7f41.firebaseapp.com",
  databaseURL: "https://gurudevaschool-e7f41-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gurudevaschool-e7f41",
  storageBucket: "gurudevaschool-e7f41.appspot.com",
  messagingSenderId: "671728411213",
  appId: "1:671728411213:web:d0b1b7edf430e44f493204",
  measurementId: "G-SKS142P0M1"
};
$.validator.setDefaults({
  submitHandler: function () {
    console.log("Form Submit");
    return false;
  }
});

$().ready(function () {
  firebase.initializeApp(config);
  var authUser = firebase.auth().currentUser;
  if (authUser === undefined || authUser === null) {
    console.log("Admin >> ", "User not logged in");
    localStorage.removeItem("VANI_ADMIN_USER");
  } else {
    console.log("Admin >> ", "User logged in");
    window.location.href = "index.html";
    localStorage.setItem("VANI_ADMIN_USER", authUser);
  }
  // validate signup form on keyup and submit
  $("#adminloginform").validate({
    rules: {
      txtadminemail: {
        required: true,
        email: true
      },
      txtadminpassword: {
        required: true,
        minlength: 3
      }
    },
    messages: {
      email: {
        required: "Please enter a valid email address",
        email: "Please enter a valid email address"
      },
      txtadminpassword: {
        required: "Please provide a password",
        minlength: "Please enter a valid password"
      }
    }
  });
});
