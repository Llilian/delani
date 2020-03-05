$(document).ready(function(){
  $("#development-image").click(function(){
    $("#development-image").slideDown('1000').hide('800');
    $("#development").show('1500');
    $("#development p").show();
  });
  $("#development").click(function(){
    $("#development-image").slideDown('1100');
    $("#development").slideUp('100');
  });
  $("#design-image").click(function(){
    $("#design-image").slideDown('1000').hide('1200');
    $("#design").show('1000');
    $("#design p").show();
  });
  $("#design").click(function(){
    $("#design").slideUp('1200');
    $("#design-image").slideDown('1200');
  });
  $("#product-image").click(function(){
    $("#product-image").slideDown('1500').hide('1000');
    $("#product").show('1500');
    $("#product p").show();
  });
  $("#product").click(function(){
    $("#product").slideUp('1500');
    $("#product-image").slideDown('1500');
  });
});
