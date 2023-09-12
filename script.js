document.addEventListener("DOMContentLoaded", function () {
  let form_register = document.querySelector("#register_form");
  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  let password_conf = document.querySelector("#password_conf");
  let firstname = document.querySelector("#firstname");
  let lastname = document.querySelector("#lastname");
  let error_login = document.querySelector('#error_login')
  let error_submit = document.querySelector('#error_submit');

// ----------------------------------------------------------------------------------------------
  // --------------------------------Verification of form inputS start--------------------------
// ----------------------------------------------------------------------------------------------

  async function login_check(login) {
    let loginValue = login.value;

    if (loginValue.trim() === "") {
      login.style.backgroundColor = "red";
      login.style.borderColor = "red"
    } else {
      login.style.backgroundColor = "initial";
      login.style.borderColor = "initial";
    }

    let data = new FormData(form_register);
    data.append("loginCheck", "ok")

    let response = await fetch("traitement.php",{
      method: "POST",
      body: data,
    })

    let result = (await response.text()).trim();
console.log(result)
    if (result === 'existant') {
      // if (response === "existant") {
      error_login.innerHTML = "Login unavailable";
      login.style.borderColor = "red";
      login.style.backgroundColor = "red";
    }
    else if (result === "inexistant") {
      console.log("test2")
      login.style.borderColor = "initial";
      login.style.backgroundColor = "initial";
      error_login.innerHTML = ""
    } 

    
  }

  function password_check(password) {
    let passwordValue = password.value;

    if (passwordValue.trim() === "") {
      password.style.backgroundColor = "red";
    } else {
      password.style.backgroundColor = "initial";
      password.style.borderColor = "initial";
    }
  }

  function firstname_check(firstname) {
    let firstnameValue = firstname.value;

    if (firstnameValue.trim() === "") {
      firstname.style.backgroundColor = "red";
    } else {
      firstname.style.backgroundColor = "initial";
      firstname.style.borderColor = "initial";
    }
  }

  function password_conf_check(password_conf) {
    let password_confValue = password_conf.value;

    if (password_confValue.trim() === "") {
      password_conf.style.backgroundColor = "red";
    } else {
      password_conf.style.backgroundColor = "initial";
      password_conf.style.borderColor = "initial";
    }
  }

  function lastname_check(lastname) {
    let lastnameValue = lastname.value;

    if (lastnameValue.trim() === "") {
      lastname.style.backgroundColor = "red";
    } else {
      lastname.style.backgroundColor = "initial";
      lastname.style.borderColor = "initial";
    }
  }


   async function register(form_register) {

    let data = new FormData(form_register)
    data.append("register", "ok")

    let response = await fetch("traitement.php",{
      method: "POST",
      body: data,
    })

    let result = (await response.text()).trim();
    if (result === 'registerOK') {
      error_submit.innerHTML = "Register succeed"
      
    }
    else if (result === "registernotOK") {
      console.log("test2")

      error_submit.innerHTML = "Register fail"
    } 


  }

































  

  
  // ----------------------------------------------------------------------------------------------
  // --------------------------------Verification of form inputS end-----------------------
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
  lastname.addEventListener('blur', function(e){
    e.preventDefault();
    lastname_check(lastname)
  })
});
