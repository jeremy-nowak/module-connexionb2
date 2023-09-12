<?php
require_once "User.php";
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

    var_dump($password, $password_conf);

    $user->register($login, $password, $password_conf, $lastname, $firstname);
}



?>