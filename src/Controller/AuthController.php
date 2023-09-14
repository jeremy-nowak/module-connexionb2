<?php
namespace App\Controller;
use App\Model\User;
if(!isset($_SESSION)){
    session_start();
}



class AuthController {
    


    function checkLoginAuth($login){

        $user = new User();
        $user->checkLogin($login);
        
    }


    function register(){
        
        $_POST['login'] = trim($_POST['login']);
        $_POST['password'] = trim($_POST['password']);
        $_POST['password_conf'] = trim($_POST['password_conf']);
        $_POST['lastname'] = trim($_POST['lastname']);
        $_POST['firstname'] = trim($_POST['firstname']);

        $login = $_POST['login'];
        $password = $_POST['password'];
        $password_conf = $_POST['password_conf'];
        $lastname = $_POST['lastname'];
        $firstname = $_POST['firstname'];

        if ($this->checkLoginAuth($login) === "inexistant") {

            if (!empty($password) == !empty($password_conf) && strlen($password) >= 8 && !empty($lastname) && !empty($firstname)) {

            $password = trim($password);
            $password_conf = trim($password_conf);



                $login = htmlspecialchars($login);
                $firstname = htmlspecialchars($firstname);
                $lastname = htmlspecialchars($lastname);
                $password = htmlspecialchars($password);
                $password = password_hash($password, PASSWORD_DEFAULT);

                $user = new User();
                $user->register($login, $password, $lastname, $firstname);




    }
}
}

public function authLogin(){

    var_dump($_POST);

    $login = trim($_POST['login']);
    $password = trim($_POST['password_login']);

    $user = new User();
    $user->login($login, $password);
}



public function logoutAuth()
{
    session_destroy();
    header("Location: ./");
}
}



?>