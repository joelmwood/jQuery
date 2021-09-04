$( ".button1" ).click(function() {
  $("h1").text("Test One");
});

$( ".button2" ).click(function() {
  $("h1").fadeOut();
});

$( ".button3" ).click(function() {
  $("h1").fadeIn();
});

$( ".button4" ).click(function() {
  $("h1").slideUp();
});

$( ".button5" ).click(function() {
  $("h1").slideDown();
});

$("h1").click(function(){
  $("h1").css("color", "purple");
});

$("body").keydown(function(e){
  $("h1").html("You pressed: " + e.key);
});

$("h1").on("mouseover", function(){
  $("h1").css("color", "red");
});
