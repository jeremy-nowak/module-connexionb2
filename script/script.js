document.addEventListener("DOMContentLoaded", function () {

console.log(window.location.pathname.toString())
// ----------------------------------------------------------------------------------------------
// --------------------------------Register Section Start----------------------------------------
// ----------------------------------------------------------------------------------------------



  if (window.location.pathname.toString() === "/module-connexionb2/view/inscription.php") {
    
    
  let form_register = document.querySelector("#register_form");
  let login = document.querySelector("#login");
  let password = document.querySelector("#password");
  let error_password = document.querySelector('#error_password')
  let password_conf = document.querySelector("#password_conf");
  let error_password_conf = document.querySelector('#error_password_conf')
  let firstname = document.querySelector("#firstname");
  let error_firstname = document.querySelector('#error_firstname')
  let lastname = document.querySelector("#lastname");
  let error_lastname =document.querySelector('#error_lastname')
  let error_login = document.querySelector('#error_login')
  let error_submit = document.querySelector('#error_submit');
  

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
    data.append("loginCheck", "ok")

    let response = await fetch("../controller/traitement.php",{
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
      error_password.innerHTML ='You need to type a password'
    } else {
      password.style.backgroundColor = "initial";
      password.style.borderColor = "initial";
    }
  }

  function firstname_check(firstname) {
    let firstnameValue = firstname.value;

    if (firstnameValue.trim() === "") {
      firstname.style.backgroundColor = "red";
      error_firstname.innerHTML = 'You need to type your Firstname'
    } else {
      firstname.style.backgroundColor = "initial";
      firstname.style.borderColor = "initial";
    }
  }

  function password_conf_check(password_conf) {
    let password_confValue = password_conf.value;

    if (password_confValue.trim() === "") {
      password_conf.style.backgroundColor = "red";
      error_password_conf.innerHTML = 'You need to type a password'

    } else {
      password_conf.style.backgroundColor = "initial";
      password_conf.style.borderColor = "initial";
    }
  }

  function lastname_check(lastname) {
    let lastnameValue = lastname.value;

    if (lastnameValue.trim() === "") {
      lastname.style.backgroundColor = "red";
      error_lastname.innerHTML="You need to type your lastname"
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

  async function register(form_register) {

    let data = new FormData(form_register)
    data.append("register", "ok")

    let response = await fetch("../controller/traitement.php",{
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
  lastname.addEventListener('blur', function(e){
    e.preventDefault();
    lastname_check(lastname)
  })
  // ----------------------------------------------------------------------------------------------
  // --------------------------------addEventListener end------------------------------------------
  // ----------------------------------------------------------------------------------------------

  // ----------------------------------------------------------------------------------------------
// --------------------------------Register Section End--------------------------------------------
// ------------------------------------------------------------------------------------------------
}



// ----------------------------------------------------------------------------------------------
// --------------------------------Login Section Start-------------------------------------------
// ----------------------------------------------------------------------------------------------

 if(window.location.pathname === "/module-connexionb2/view/connexion.php"){

 
let login_form = document.querySelector('#login_form');
let login_login = document.querySelector('#login_login');
let password_login = document.querySelector('#password_login')
let submit_login = document.querySelector('#submit_login')


// ----------------------------------------------------------------------------------------------
// --------------------------------Verification of form inputS start-----------------------------
// ----------------------------------------------------------------------------------------------

async function login_check(login_login) {
  let login_loginValue = login_login.value;

  if (login_loginValue.trim() === "") {
    login_login.style.backgroundColor = "red";
    login_login.style.borderColor = "red"
  } else {
    login_login.style.backgroundColor = "initial";
    login_login.style.borderColor = "initial";
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
    login_login.style.borderColor = "red";
    login_login.style.backgroundColor = "red";
  }
  else if (result === "inexistant") {
    console.log("test2")
    login_login.style.borderColor = "initial";
    login_login.style.backgroundColor = "initial";
    error_login.innerHTML = ""
  } 
}
// ----------------------------------------------------------------------------------------------
// --------------------------------Verification of form inputS end-------------------------------
// ----------------------------------------------------------------------------------------------



// ----------------------------------------------------------------------------------------------
// --------------------------------Function login start------------------------------------------
// ----------------------------------------------------------------------------------------------

async function login(login_form) {

  let data = new FormData(login_form)
  data.append("login_form", "ok")

  let response = await fetch("traitement.php",{
    method: "POST",
    body: data
  })

  let result = (await response.text()).trim();


  if (result === 'loginOK') {
    setTimeout("Congratulation you are logged !", 2000)

}
  if(result === 'loginnotOK'){
    error_submit.innerHTML = "Login fail"
  }


}


// ----------------------------------------------------------------------------------------------
// --------------------------------Function login start------------------------------------------
// ----------------------------------------------------------------------------------------------


// ----------------------------------------------------------------------------------------------
// --------------------------------addEventListener login start----------------------------------
// ----------------------------------------------------------------------------------------------

submit_login.addEventListener("submit", function(e){
  e.preventDefault();

  login(login_form)
})

// ----------------------------------------------------------------------------------------------
// --------------------------------addEventListener login end-----------------------------------
// ----------------------------------------------------------------------------------------------





// ----------------------------------------------------------------------------------------------
// --------------------------------Login Section End---------------------------------------------
// ----------------------------------------------------------------------------------------------
 }

});