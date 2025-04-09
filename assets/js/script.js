
// Get the submit button
var form = document.getElementById('#login-form');
var submitButton = document.querySelector('#btnSubmit');
var fileInput = document.getElementById('file-input');
var preview = document.getElementById('image-preview');
var progressContainer = document.getElementById('progress-container');
var progressBar = document.getElementById('progress-bar');
var imageError = document.querySelector('.image-add ');
var imageInfo = document.querySelector('.img-size-info');
var loginForm = document.getElementById('login-form');
var registerForm = document.getElementById('register-form');
var registerBtn = document.getElementById('register_button');
var loginBtn = document.getElementById('login_button');
var emailValidation = document.querySelector('#email');




//Add the event listener to a submit.
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    // Get all the form element values
    var firstName = document.querySelector('#firstName').value;
    var lastName = document.querySelector('#lastName').value;
   var message = document.querySelector('#message').value;
    var fileInput = document.querySelector('#file-input');
    var errorMsg = document.querySelector('.error-msg');
    var successMsg = document.querySelector('.success-msg');
    var email = document.querySelector('#email').value;

    var fileSelected = fileInput.files.length > 0;
     //Validate the empty input and show an error.
    if (!firstName || !lastName || !email || !message || !fileSelected) {
        errorMsg.style.display = "block";
        successMsg.style.display = "none";
    } else {
        errorMsg.style.display = "none";
        successMsg.style.display = "block";

        // Reset the form after filling the form.
        registerForm.reset();

       // Clear the preview image too.
        var preview = document.querySelector('#image-preview');
        if (preview) {
            preview.src = '';
        }
        
        //Clear a progress bar
        progressContainer.style.display = "none";
    }

});


  // Validate the correct email format.
emailValidation.addEventListener('keyup', () => {
    const emailValue = emailValidation.value.trim();
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);

    if (!emailIsValid) {
        emailValidation.style.borderColor = "#A20202";
      } else {
        emailValidation.style.borderColor = "#D8AF7A";
      }
 }) 



//Add a register click even to open a register form
registerBtn.addEventListener('click',(f) => {
     f.preventDefault();
     registerForm.style.display = "block";
     loginForm.style.display = "none";
})

//Add a login click even to open a login form
loginBtn.addEventListener('click',(f) => {
    f.preventDefault();
    registerForm.style.display = "none";
    loginForm.style.display = "block";
})

//Add an eventlistener to listen for an image change.
fileInput.addEventListener('change', function () {
    const file = fileInput.files[0];
  
    if (!file) return;
  
    // Validate file type
    const allowedTypes = ['image/jpeg', 'image/png'];

    //Check if the file formats are available
    if (!allowedTypes.includes(file.type)) {
      preview.src = './images/error-img.svg';
      progressBar.style.width = '0%'; // Reset progress bar
      progressContainer.style.display = 'flex';
      progressContainer.style.flexDirection = "column-reverse";
      progressContainer.style.width = "88%";
      progressContainer.style.height = "4px";
      progressContainer.style.backgroundColor = "#ddd";
      imageInfo.style.display = "flex";
    } else {
        progressBar.style.width = '100%';
        progressContainer.style.width = "100%";
        progressContainer.style.backgroundColor = "#D8AF7A";
        progressContainer.style.height = "4px";
        progressContainer.style.display = "block";
        imageInfo.style.display = "none";
        

         // Load and preview image with progress monitoring
         const reader = new FileReader();
            // Image loading complete
            reader.onload = function (e) {
                preview.src = e.target.result; // Set preview image
                progressBar.style.width = '100%'; // Ensure progress bar reaches 100%
            };
            
            reader.readAsDataURL(file); // Read file as Data URL

    }
 
  });

