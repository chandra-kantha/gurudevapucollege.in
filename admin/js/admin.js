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
firebase.initializeApp(config);
if (
  localStorage.getItem('VANI_ADMIN_USER') === undefined || localStorage.getItem('VANI_ADMIN_USER') === null
) {
  window.location.href = "login.html";
} else {
  console.log("Admin >> ", "User logged in");

}

(function ($) {
  "use strict";
  $(document).on("ready", function () {
    console.log("Admin >> ", "Admin Js Ready ");
  });
})(jQuery);
