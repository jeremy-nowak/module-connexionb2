<?php
require_once "/var/www/html/module-connexionb2/class/User.php";
$user = new User();


if (isset($_POST["loginCheck"])) {

    $user -> checkLogin($_POST["login"]);
}

if (isset($_POST["register"])) {  
    

    $login = $_POST["login"]; 
    $password = $_POST["password"];
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $password_conf = $_POST["password_conf"];

    $user->register($login, $password, $password_conf, $lastname, $firstname);
}

if(isset($_POST["login_formulaire"])){


        $login = $_POST["login"];
        $password = $_POST["password_login"];

        $user->login($login, $password);
}


?>