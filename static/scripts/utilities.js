$(document).ready(function(){
  $(".alert").click(function(){
      $(this).hide();
  });
});

$(document).ready(function(){
  $('#logout').on('click', 'a', function(event){
      event.preventDefault();

      $.post("/logout", function() {
          console.log("Logout successful.");
          // you can redirect to login page or whatever you want after successful logout
          // window.location.href = "/login";
      })
      .fail(function() {
          console.log("Error on logout.");
      });
  });
});