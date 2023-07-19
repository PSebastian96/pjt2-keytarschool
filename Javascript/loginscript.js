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

//message to let the user know if the register form was successfull or not
let modalMessage = document.querySelector('#modal-register-btn');
modalMessage.addEventListener('click',  event => {
      console.log("clicked");
      registerStatus();
  });

  function registerStatus() {
      let registerName = document.getElementById('register-name');
      let registerEmail = document.getElementById('register-mail');
      let registerPass = document.getElementById('register-pass');
  
      const msgSuccess = document.getElementById('success');
      const failedMsg = document.getElementById('failed');
  
      if (registerName.value === '' ||registerEmail.value === '' || registerPass.value === '') {
          console.log(failedMsg);
          failedMsg.style.display = 'block';
      } else { 
  
          msgSuccess.style.display = 'block';
  
              setTimeout(() => {
              registerName.value = '';
              registerEmail.value = '';
              registerPass.value = '';
          },2000);
      }
     
      setTimeout(() => {
          failedMsg.style.display = 'none';
          msgSuccess.style.display = 'none';
      },4000);
};