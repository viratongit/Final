$(document).ready(function() {
    $('#registrationForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the form data
      var regUsername = $('#regUsername').val();
      var regEmail = $('#regEmail').val();
  
      // Save the registration data to localStorage
      var userData = {
        username: regUsername,
        email: regEmail
      };
      localStorage.setItem('userData', JSON.stringify(userData));
  
      alert('Registration successful!');
      clearFormFields('#registrationForm');
    });
  
    $('#loginForm').submit(function(event) {
      event.preventDefault(); // Prevent default form submission
  
      // Get the form data
      var loginUsername = $('#loginUsername').val();
      var loginPassword = $('#loginPassword').val();
  
      // Retrieve user data from localStorage
      var storedData = JSON.parse(localStorage.getItem('userData'));
  
      if (storedData && storedData.username === loginUsername) {
        alert('Login successful!');
      } else {
        alert('Login failed. Please check your username and password.');
      }
  
      clearFormFields('#loginForm');
    });
  
    // Function to clear form fields
    function clearFormFields(formId) {
      $(formId).trigger('reset');
    }
  });
  