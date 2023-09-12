<?php
session_start();
require_once "User.php";
require_once "traitement.php";

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
    <title>Connexion</title>
</head>
<body>
    
<form  method="post" id="connexion_form">

    <label for="login">Login</label>
    <input type="text" name="login" id="login">

    <label for="password">Password</label>
    <input type="password" name="password_login" id="password_login">

    <input type="submit" value="Submit" id="submit_login">

</form>


</body>
</html>