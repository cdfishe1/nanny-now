const loginFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#loginUN").value.trim();
  const password = document.querySelector("#loginPass").value.trim();

  if (username && password) {
    console.log(username, password);
    const response = await fetch("api/parents/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to log in.");
    }
  }
};

document
  .querySelector(".loginCard")
  .addEventListener("submit", loginFormHandler);
