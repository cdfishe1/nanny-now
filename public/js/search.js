//FUNCTION TO MAKE REQUEST TO SEARCH DB FOR NANNIES IN DB THAT MATCH SEARCH LOCATION VALUE
const searchHandler = async (event) => {
  event.preventDefault();

  const searchLocation = document
    .querySelector("#searchNanny")
    .value.trim()
    .toLowerCase();

  if (searchLocation) {
    //ROUTES TO NANNY ROUTES THAT USES A GET REQUEST TO RETRIEVE MATCHING INFORMATION
    document.location.replace(`/api/nannies/${searchLocation}`);
  }
};

document.querySelector(".searchBtn").addEventListener("click", searchHandler);
