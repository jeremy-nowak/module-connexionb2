<?php
require_once "User.php";
$user = new User();


if (isset($_POST["loginCheck"])) {

    $user -> checkLogin($_POST["login"]);
}



?>