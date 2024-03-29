document.addEventListener("DOMContentLoaded", function () {
  console.log(window.location.pathname.toString());
  // ----------------------------------------------------------------------------------------------
  // --------------------------------Register Section Start----------------------------------------
  // ----------------------------------------------------------------------------------------------

  
    let form_register = document.querySelector("#register_form");
    let login = document.querySelector("#login");
    let password = document.querySelector("#password");
    let error_password = document.querySelector("#error_password");
    let password_conf = document.querySelector("#password_conf");
    let error_password_conf = document.querySelector("#error_password_conf");
    let firstname = document.querySelector("#firstname");
    let error_firstname = document.querySelector("#error_firstname");
    let lastname = document.querySelector("#lastname");
    let error_lastname = document.querySelector("#error_lastname");
    let error_login = document.querySelector("#error_login");
    let error_submit = document.querySelector("#error_submit");

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Verification of form inputS start--------------------------
    // ----------------------------------------------------------------------------------------------

    async function login_check(login) {
      let loginValue = login.value;

      if (loginValue.trim() === "") {
        login.style.backgroundColor = "red";
        login.style.borderColor = "red";
      } else {
        login.style.backgroundColor = "initial";
        login.style.borderColor = "initial";
      }

      let data = new FormData(form_register);
      data.append("loginCheck", "ok");
console.log(data)
      let response = await fetch("register/verifLog", {
        method: "POST",
        body: data,
      });

      let result = (await response.text()).trim();
      console.log(result);
      if (result === "existant") {
        // if (response === "existant") {
        error_login.innerHTML = "Login unavailable";
        login.style.borderColor = "red";
        login.style.backgroundColor = "red";
      } else if (result === "inexistant") {
        login.style.borderColor = "initial";
        login.style.backgroundColor = "initial";
        error_login.innerHTML = "";
      }
    }

    function password_check(password) {

      const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      let passwordValue = password.value;

      error_password.innerHTML = "";

        if (passwordValue.trim() === "") {
          password.style.backgroundColor = "red";
          error_password.innerHTML = "You need to type a password";
        }
        else if(regexPassword.test(passwordValue)){
          password.style.backgroundColor = "initial";
          password.style.borderColor = "initial";
        } 
        else{
          error_password.innerHTML = "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character:"
        }
      
    }

    function firstname_check(firstname) {
      let firstnameValue = firstname.value;
      error_firstname.innerHTML = "";

      if (firstnameValue.trim() === "") {
        firstname.style.backgroundColor = "red";
        error_firstname.innerHTML = "You need to type your Firstname";
      } else {
        firstname.style.backgroundColor = "initial";
        firstname.style.borderColor = "initial";
      }
    }

    function password_conf_check(password_conf) {
      let password_confValue = password_conf.value;
      error_password_conf.innerHTML = "";

      if (password_confValue.trim() === "") {
        password_conf.style.backgroundColor = "red";
        error_password_conf.innerHTML = "You need to type a password";
      } else {
        password_conf.style.backgroundColor = "initial";
        password_conf.style.borderColor = "initial";
      }
    }

    function lastname_check(lastname) {
      error_lastname.innerHTML = "";
      let lastnameValue = lastname.value;

      if (lastnameValue.trim() === "") {
        lastname.style.backgroundColor = "red";
        error_lastname.innerHTML = "You need to type your lastname";
      } else {
        lastname.style.backgroundColor = "initial";
        lastname.style.borderColor = "initial";
      }
    }

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Verification of form inputS end-------------------------------
    // ----------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Function register start---------------------------------------
    // ----------------------------------------------------------------------------------------------

    function locationLogin() {
      window.location.href = "login";
    }

    async function register(form_register) {
      let data = new FormData(form_register);
      data.append("register", "ok");
      let response = await fetch('register/registerValidate', {
        method: "POST",
        body: data,

      });
// regler le probleme de la redirection ver ma page login
      
      let result = (await response.text()).trim();
      console.log(result)
      if (result === "inexistantregisterOK") {
        error_submit.innerHTML = "Congratulation you are registered !";
        setTimeout(() => {
          locationLogin();
        }, 2000);

      } else if (result === "inexistantregisternotOK") {
        console.log("register fail");

        error_submit.innerHTML = "Register fail";
      }
    }

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Function end-------------------------------------------------
    // ----------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------
    // --------------------------------addEventListener start----------------------------------------
    // ----------------------------------------------------------------------------------------------

    form_register.addEventListener("submit", function (e) {
      e.preventDefault();
      register(form_register);
    });

    login.addEventListener("blur", async function (e) {
      e.preventDefault();

      await login_check(login);
    });

    password.addEventListener("blur", function (e) {
      e.preventDefault();
      password_check(password);
    });
    firstname.addEventListener("blur", function (e) {
      e.preventDefault();
      firstname_check(firstname);
    });
    password_conf.addEventListener("blur", function (e) {
      e.preventDefault();
      password_conf_check(password_conf);
    });
    lastname.addEventListener("blur", function (e) {
      e.preventDefault();
      lastname_check(lastname);
    });
    // ----------------------------------------------------------------------------------------------
    // --------------------------------addEventListener end------------------------------------------
    // ----------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Register Section End--------------------------------------------
    // ------------------------------------------------------------------------------------------------
  

  // ----------------------------------------------------------------------------------------------
  // --------------------------------Login Section Start-------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // if (window.location.pathname === "/module-connexionb2/view/connexion.php") {
  //   let login_form = document.querySelector("#login_form");
  //   let login_login = document.querySelector("#login_login");
  //   let password_login = document.querySelector("#password_login");
  //   let submit_login = document.querySelector("#submit_login");
  //   let error_form_login = document.querySelector("#error_form_login");
    
  //   // ----------------------------------------------------------------------------------------------
  //   // --------------------------------Verification of form inputS start-----------------------------
  //   // ----------------------------------------------------------------------------------------------
  //   console.log(submit_login)

  //   async function login_check(login_login) {
  //     let login_loginValue = login_login.value;
  //     error_login.innerHTML = "";


  //     if (login_loginValue.trim() === "") {
  //       login_login.style.backgroundColor = "red";
  //       login_login.style.borderColor = "red";
  //     } else {
  //       login_login.style.backgroundColor = "initial";
  //       login_login.style.borderColor = "initial";
  //     }

  //     let data = new FormData(form_register);
  //     data.append("loginCheck", "ok");

  //     let response = await fetch("../controller/traitement.php", {
  //       method: "POST",
  //       body: data,
  //     });

  //     let result = (await response.text()).trim();
  //     console.log(result);

  //     if (result === "existant") {
  //       // if (response === "existant") {
  //       error_login.innerHTML = "Login unavailable";
  //       login_login.style.borderColor = "red";
  //       login_login.style.backgroundColor = "red";
  //     } else if (result === "inexistant") {
  //       login_login.style.borderColor = "initial";
  //       login_login.style.backgroundColor = "initial";
  //       error_login.innerHTML = "";
  //     }
  //   }
  //   // ----------------------------------------------------------------------------------------------
  //   // --------------------------------Verification of form inputS end-------------------------------
  //   // ----------------------------------------------------------------------------------------------

  //   // ----------------------------------------------------------------------------------------------
  //   // --------------------------------Function login start------------------------------------------
  //   // ----------------------------------------------------------------------------------------------

  //   function indexLocation(){
  //     window.location = "../index.php"
  //   }

  //   async function login(login_form) {

  //     let data = new FormData(login_form);
  //     data.append("login_formulaire", "ok");

  //     let response = await fetch("../controller/traitement.php", {
  //       method: "POST",
  //       body: data
  //     });

  //     let result = (await response.text()).trim();
  //     if (result === "loginOK") {
  //       error_form_login.innerHTML = "Login successfull"
  //       setTimeout( indexLocation, 2000)
  //       }
  //     if (result === "loginnotOK") {
  //       error_form_login.innerHTML = "Login fail";
  //     }
  //   }

  //   // ----------------------------------------------------------------------------------------------
  //   // --------------------------------Function login start------------------------------------------
  //   // ----------------------------------------------------------------------------------------------

  //   // ----------------------------------------------------------------------------------------------
  //   // --------------------------------addEventListener login start----------------------------------
  //   // ----------------------------------------------------------------------------------------------

  //   // submit_login.addEventListener("submit", function (e) {
  //   //   e.preventDefault();
  //   //   // login(login_form);

  //   //   console.log("cabuuuug")
  //   // });
  //   login_form.addEventListener("submit", function (e) {
  //     e.preventDefault();
    
  //     login(login_form)
  //   });

    // ----------------------------------------------------------------------------------------------
    // --------------------------------addEventListener login end-----------------------------------
    // ----------------------------------------------------------------------------------------------

    // ----------------------------------------------------------------------------------------------
    // --------------------------------Login Section End---------------------------------------------
    // ----------------------------------------------------------------------------------------------
  // }
});
