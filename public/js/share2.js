
function shareInfo(event) {
  console.log("NAme of whogot clciked ???", $(this).attr("name"));
  console.log("we clicked!!!", event.target);
  // let emptyDiv = document.querySelector("#" + $(this).attr("name"));
  // console.log(emptyDiv);
  // emptyDiv.style.display = "block";

  $("#" + $(this).attr("name")).show();

  console.log("ok");
}

// emptyDiv.onclick = shareInfo;

//document.onclick = shareInfo;

$(".contactLink").on("click", shareInfo);


