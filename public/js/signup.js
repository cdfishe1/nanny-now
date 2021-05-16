const signupRedoFormHandler = async (event) => {
  event.preventDefault();
//SAVING ALL VALUES FROM OUR INPUT/DROP DOWN FIELDS
  const username = document.querySelector("#newUser").value.trim();
  const email = document.querySelector("#newUserEmail").value.trim();
  const password = document.querySelector("#newUserPass").value.trim();
  const location = document.querySelector("#newUserLocation").value.trim().toLowerCase();
  const gender = document.querySelector("#nannyGender").value.trim();
  const language = document.querySelector("#nannyLanguage").value.trim();
  const education = document.querySelector("#nannyEducation").value.trim();
  const experience = document.querySelector("#nannyExp").value.trim();


//IF A VALUE EXISTS FOR EACH INPUT/DROP DOWN, SEND REQUEST TO CREATE NEW USER
  if (
    username &&
    email &&
    password &&
    location &&
    gender &&
    language &&
    education &&
    experience
  ) {
    const response = await fetch("api/parents", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
        location,
        gender,
        language,
        education,
        experience,
      }),
      headers: { "Content-Type": "application/json" },
    });
//REDIRECT TO SEARCH PAGE IF NEW USER CREATED SUCCESSFULLY
    if (response.ok) {
      document.location.replace("/search");
    } else {
      alert("Failed to sign up.");
    }
  }
};

document
  .querySelector(".sign-up")
  .addEventListener("submit", signupRedoFormHandler);
