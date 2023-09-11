document.addEventListener("DOMContentLoaded", function () {
  let form_register = document.querySelector("#register_form");
  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  let password_conf = document.querySelector("#password_conf");
  let firstname = document.querySelector("#firstname");
  let lastname = document.querySelector("#lastname");

  // --------------------------------Verification of form inputS start-----------------------

  async function login_check(login) {
    let loginValue = login.value;

    if (loginValue.trim() === "") {
      login.style.backgroundColor = "red";
      login.style.borderColor = "red"
    } else {
      login.style.backgroundColor = "green";
      login.style.borderColor = "green";
    }

    let data = new FormData(form_register);
    data.append("loginCheck", "ok")

    let response = await fetch("traitement.php",{
      method: "POST",
      body: data,
    })

    let result = await response.text()
    console.log(result)

    if (result === "existant") {
      login.nextElementSibling.innerHTML = "Login unavailable";

      login.style.borderColor = "red";
      login.style.backgroundColor = "#ff000033";

    }
    else if (result === "inexistant") {
      
      login.style.borderColor = "green";
      login.style.backgroundColor = "#green";

    } 
    
  }

  function password_check(password) {
    let passwordValue = password.value;

    if (passwordValue.trim() === "") {
      password.style.backgroundColor = "red";
    } else {
      password.style.backgroundColor = "green";
      password.style.borderColor = "green";
    }
  }

  function firstname_check(firstname) {
    let firstnameValue = firstname.value;

    if (firstnameValue.trim() === "") {
      firstname.style.backgroundColor = "red";
    } else {
      firstname.style.backgroundColor = "green";
      firstname.style.borderColor = "green";
    }
  }

  function password_conf_check(password_conf) {
    let password_confValue = password_conf.value;

    if (password_confValue.trim() === "") {
      password_conf.style.backgroundColor = "red";
    } else {
      password_conf.style.backgroundColor = "green";
      password_conf.style.borderColor = "green";
    }
  }

  function lastname_check(lastname) {
    let lastnameValue = lastname.value;

    if (lastnameValue.trim() === "") {
      lastname.style.backgroundColor = "red";
    } else {
      lastname.style.backgroundColor = "green";
      lastname.style.borderColor = "green";
    }
  }

  // --------------------------------Verification of form inputS end-----------------------

  // function register(form_register) {
  //   let data = new FormData(form_register);
  //   data.append("in");
  //   let response = fetch("traitement.php", {
  //     method: "POST",
  //     body: data,
  //   })
  //     .then((rep) => {
  //       console.log(rep);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }

  // form_register.addEventListener("submit", function (e) {
  //   e.preventDefault();
  //   login_check(form_register);
  // });

  login.addEventListener("blur", function (e) {
    e.preventDefault();
    login_check(login);
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
