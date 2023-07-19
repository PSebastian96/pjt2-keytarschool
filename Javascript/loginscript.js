// switching between register and login form
const logRegWrapper = document.querySelector(".log-reg-wrapper"),
        signupHeader = document.querySelector(".register h1"),
        loginHeader = document.querySelector(".login h1");
        loginHeader.addEventListener("click", () => {
          logRegWrapper.classList.add("active");
        });
        signupHeader.addEventListener("click", () => {
          logRegWrapper.classList.remove("active");
        });