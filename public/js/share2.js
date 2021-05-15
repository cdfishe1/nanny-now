const shareInfo = (event) => {
  console.log(event.target);
  let emptyDiv = document.querySelector("#contacted");
  console.log(emptyDiv);
  emptyDiv.style.display = "block";

  console.log("ok");
};

// emptyDiv.onclick = shareInfo;

document.onclick = shareInfo;
