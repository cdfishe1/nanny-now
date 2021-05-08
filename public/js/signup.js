const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#newUser").value.trim();
  const email = document.querySelector("#newUserEmail").value.trim();
  const password = document.querySelector("#newUserPass").value.trim();
  const location = document.querySelector("#newUserLocation").value.trim();

  if (username && email && password && location) {
    
    const response = await fetch("/api/parents", {
      method: "POST",
      body: JSON.stringify({ username, email, password, location }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".sign-up")
  .addEventListener("submit", signupFormHandler);
