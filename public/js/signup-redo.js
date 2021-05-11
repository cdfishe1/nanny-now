const signupRedoFormHandler = async (event) => {
    event.preventDefault();
  
    const username = document.querySelector("#newUser").value.trim();
    const email = document.querySelector("#newUserEmail").value.trim();
    const password = document.querySelector("#newUserPass").value.trim();
    const location = document.querySelector("#newUserLocation").value.trim();
    const gender = document.querySelector("#nannyGender").value.trim();
    const language = document.querySelector("#nannyLanguage").value.trim();
    const education = document.querySelector("#nannyEducation").value.trim();
    const experience= document.querySelector("#nannyExp").value.trim();
  
    if (username && email && password && location && gender && language && education && experience) {
      const response = await fetch("api/parents", {
        method: "POST",
        body: JSON.stringify({ username, email, password, location, gender, language, education, experience }),
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
    .querySelector(".sign-upRedo")
    .addEventListener("submit", signupRedoFormHandler);