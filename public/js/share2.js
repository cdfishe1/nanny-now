document.addEventListener("DOMContentLoaded", function shareInfo(event) {
  console.log(event.target);

  document.querySelector("#contactLink").addEventListener("click", () => {
    let emptyDiv = document.querySelector("#contacted");
    console.log(emptyDiv);
    emptyDiv.style.display = "block";

    console.log("ok");
  });
});

// const shareInfo = (event) => {
//   console.log(event.target);
//   let emptyDiv = document.querySelector("#contacted");
//   console.log(emptyDiv);
//   emptyDiv.style.display = "block";

//   console.log("ok");
// };

// emptyDiv.onclick = shareInfo;

// document.querySelector("#contactLink").addEventListener("click", shareInfo);
