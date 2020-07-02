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