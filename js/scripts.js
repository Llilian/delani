$(document).ready(function(){
  $("form").submit(function(event){
    // event.preventDefault();
    var name = $("input#name1").val();
    var email = $("input#name0").val();
    var message = $("textarea#comment").val();
    if ($("input#name1").val() && $("input#name0").val()){
      alert (name + ", we have received your message. Thank you for reaching out to us.");
    }
    else {
      alert("Please enter your name and email!");
    }
    
  });

});
