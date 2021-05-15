const searchHandler = async (event) => {
  event.preventDefault();

  const searchLocation = document
    .querySelector("#searchNanny")
    .value.trim()
    .toLowerCase();
  console.log("test", searchLocation);
  if (searchLocation) {
  console.log('ABOUT ot change url!!!', searchLocation)
    document.location.replace(`/api/nannies/${searchLocation}`);
    // const response = await fetch(`/api/nannies/${searchLocation}`, {
    //   method: "GET",
    //   // body: JSON.stringify({ searchLocation }),
    //   headers: { "Content-Type": "application/json" },
    // });

    // if (response.ok) {
    //   document.location.replace(`/api/nannies/${searchLocation}`);
    //   console.log("OK!");
    // } else {
    //   alert("Search Failed");
    // }
  }
};

document.querySelector(".searchBtn").addEventListener("click", searchHandler);
