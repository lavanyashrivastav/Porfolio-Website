// add class navbarDark on navbar scroll
const header = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        header.classList.add('navbarDark');
    }
    else {
        header.classList.remove('navbarDark');
    }
}   

function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim(); 
 
    if (email.endsWith("@mitwpu.edu.in")) {
       window.location.href = "../home.html"; 
       return false; 
    } else {
       alert("Please use a valid email ending with @mitwpu.edu.in");
       return false; 
    }
 }

 document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.querySelector("form");

    // Add an event listener for form submission
    form.addEventListener("submit", function (event) {
        // Prevent the default form submission
        event.preventDefault();

        // Get the value of the name input field
        var nameInput = document.querySelector("input[type='text'][placeholder='Name']");
        var name = nameInput.value;

        // Check if the name contains any numbers
        if (/\d/.test(name)) {
            // Display an alert message if numbers are found
            alert("Name field contains numbers. Please remove them.");
        } else {
            // Redirect to home.html if no numbers are found
            window.location.href = "home.html";
        }
    });
});
