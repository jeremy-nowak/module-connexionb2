<?php
namespace App\Controller;
use App\Model\User;
if(!isset($_SESSION)){
    session_start();
}   

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