$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
    if ($(document).scrollTop() > 690) { // check if user scrolled more than 50 from top of the browser window
        $(".navbar-fixed-top").css("background-color", "#000000"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
        $(".navbar-fixed-top").css("background-color", "transparent"); // if not, change it back to transparent
    }
    });
});

let OTP = ''; 
function sendEmail() {
    var digits = '0123456789';
    OTP = '';
    for (let i = 0; i < 4; i++ ) { 
        OTP += digits[Math.floor(Math.random() * 10)]; 
    }
    console.log(OTP);
    Email.send({
        //SecureToken : "00acee8d-67b9-4a20-86f7-0ce6f66f0d86",
        Host : "smtp.gmail.com",
        Username : "96.hement.kumar@gmail.com",
        Password : "Demo@1996",
        To : 'souravbehura97@gmail.com',
        From : "96.hement.kumar@gmail.com",
        Subject : "OTP for verrification",
        Body : `<html><h2>Your OTP is:</h2><strong>${OTP}</strong><br></br></html>`
    }).then(
      message => alert("Please check your mail for OTP")
    );
}

var firebaseConfig = {
    apiKey: "AIzaSyDKhu8wHKsZrtxxPly6JsUWU5GEmqTeQbU",
    authDomain: "database-for-igil.firebaseapp.com",
    databaseURL: "https://database-for-igil.firebaseio.com",
    projectId: "database-for-igil",
    storageBucket: "database-for-igil.appspot.com",
    messagingSenderId: "351887413642",
    appId: "1:351887413642:web:a0af1715a2475fbe477873",
    measurementId: "G-D4CDDQ6VF2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
  firebase.auth.Auth.Persistence.LOCAL;
  /*firebase.auth().signInWithEmailAndPassword("souravbehura97@gmail.com", "demo123").catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorCode);
      console.log(errorMessage);
      window.alert("Message : " + errorMessage);
  });*/

function login() {
    var email = $("#login-email").val();
    var password = $("#login-password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        window.alert("Message : " + errorMessage);
    });
}

function register() {
    var email = $("#r-email").val();
    var otp = $("#otp").val();
    var password = $("#r-password").val();
    var cpassword = $("#r-cpassword").val();
    //var name = $("#name").val();
    var role = $("#role").val();
    if(role.trim() === "none".trim()){
        alert("Select your role");
    }
    else{

        if(password.trim() === cpassword.trim()){
            if(otp.trim() === OTP.trim())
            {
                var password = $("#r-password").val();
                var cpassword = $("#r-cpassword").val();
                firebase.auth().createUserWithEmailAndPassword(email, password)
                .catch(function(error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                if (errorCode == 'auth/weak-password') {
                    alert('The password is too weak.');
                } else {
                    alert("Message: " + errorMessage);
                }
                    console.log(error);
                });
            }
            else{
                alert("Wrong OTP entered.");
            }
        }
        else{
            alert("Password and confirm password did not match.");
        }
        /*firebase.auth().onAuthStateChanged(function(user){
            if(user)
            {
                if(role.trim() === "investor".trim())
                {
                    var ref = storageref.child(name + "-" + email);
                }
                window.location.href = "registered.html";
            }
        });*/
    }
}