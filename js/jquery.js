$(document).ready(function() {

alert (Hello!);

  $(".box").mouseover(function(){
    $("#shown").hide();
    $("#hidden").fadeIn("slow");

  });

});
