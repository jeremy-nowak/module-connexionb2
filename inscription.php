

<?php
require_once "User.php";
require_once "traitement.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="script.js"></script>
    <title>Inscription form</title>
</head>
<body>
    
    <form  method="post" id="register_form">

        <label for="login">Login:</label>
        <input type="text" name="login" id="login">
            <p id="error_login"></p>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password"><br>
        <span></span>

        <label for="password_conf">Password confirmation:</label>
        <input type="password" name="password_conf" id="password_conf"><br>
        <span></span>

        <label for="firstname">firstname:</label>
        <input type="firstname" name="firstname" id="firstname"><br>
        <span></span>
        
        <label for="lastname">lastname:</label>
        <input type="lastname" name="lastname" id="lastname"><br>
        <span></span>

        <input type="submit" value="Submit" id="submit_register">


    </form>

</body>
</html>