
$().ready(function(){
  $("#ink").click(function (){
    $("#design-images").toggle();
    $("#design").toggle();
});
});
$().ready(function(){
  $("#ink1").click(function (){
    $("#development-images").toggle();
    $("#development").toggle();
});
});
$().ready(function(){
  $("#ink2").click(function (){
    $("#product-images").toggle();
    $("#product").toggle();
});
});
$().ready(function(){
  $(".project").mouseenter(function (){
    $(this).show()
})
  $(".project").mouseleave(function (){
    $(this).hide()
});
});
