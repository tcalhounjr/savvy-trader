$(document).ready(function() {
  
    // When the login button is clicked
    $('#login').on("click", function(event) {
      event.preventDefault();
      
        // This does a GET request to authenticate the login request with Google
        $.get("/auth/google").then(function(data) {
          console.log('login with google');
        });
    });
  });

    
  
      