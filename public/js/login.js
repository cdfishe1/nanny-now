const loginFormHandler = async (event) => {
  event.preventDefault();
//GRABS INPUT VALUE FROM USERNAME/PASSWORD ENTERED BY USER
  const username = document.querySelector("#loginUN").value.trim();
  const password = document.querySelector("#loginPass").value.trim();

  if (username && password) {
    //MAKES POST REQUEST TO DB TO VERIFY INPUTTED INFO
    const response = await fetch("api/parents/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
  //DIRECTS USER TO SEARCH ONCE SUCCESSFULLY LOGGED IN
    if (response.ok) {
      document.location.replace("/search");
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector(".loginCard")
  .addEventListener("submit", loginFormHandler);
