//FUNCTION TO SHOW THE 'SUCCESSFULLY SHARE INFO' DIV ON BUTTON CLICK
function shareInfo(event) {
  $("#" + $(this).attr("name")).show();
}

$(".contactLink").on("click", shareInfo);
