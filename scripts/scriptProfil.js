document.addEventListener("DOMContentLoaded", function () {

    console.log("scriptProfil.js loaded");

    let login_form = document.querySelector("#login_form");
    let login_profil = document.querySelector("#login_profil");
    let password_profil = document.querySelector("#password_profil");
    let submit_profil = document.querySelector("#submit_profil");

    async function login_check(login_profil) {
        let login_profil_value = login_profil.value;
  
        console.log(login_profil);
        console.log(login_form);
        if (login_profil_value.trim() === "") {
          login_profil.style.backgroundColor = "red";
          login_profil.style.borderColor = "red";
        } else {
          login_profil.style.backgroundColor = "initial";
          login_profil.style.borderColor = "initial";
        }
  
        let data = new FormData(login_form);
        data.append("loginCheck", "ok");
  
        let response = await fetch("register/verifLog", {
          method: "POST",
          body: data,
        });
  
        let result = (await response.text()).trim();
        console.log(result);
        if (result === "existant") {
          // if (response === "existant") {
          error_profil.innerHTML = "Login unavailable";
          login_profil.style.borderColor = "red";
          login_profil.style.backgroundColor = "red";
        } else if (result === "inexistant") {
          login_profil.style.borderColor = "initial";
          login_profil.style.backgroundColor = "initial";
          error_profil.innerHTML = "";
        }
      }

      async function update(login_form){
        let data = new FormData(login_form);
        data.append("update", "ok");
  
        let response = await fetch("profil/updateProfil", {
          method: "POST",
          body: data,
        });
  
        let result = (await response.text()).trim();
        console.log(result);

      }

login_profil.addEventListener("blur", function () {

    login_check(login_profil);
});

login_form.addEventListener("submit", function (e) {
    e.preventDefault();

    update(login_form);


});

      
});
