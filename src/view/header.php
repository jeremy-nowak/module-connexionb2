<?php
require_once "/var/www/html/module-connexionb2/class/User.php";
require_once "/var/www/html/module-connexionb2/controller/traitement.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style/style.css">
    <script src="./script/script.js"></script>
    <title>Document</title>
</head>
<body>
    
</body>
</html>
<header id="header">
        <nav>
            <ul>
                <li><a href="index.php">Index</a></li>
                <li><a href="<?=$_SESSION["uri"] ?>view/connexion.php">Login</a></li>
                <li><a href="<?=$_SESSION["uri"] ?>view/inscription.php">Register</a></li>
            </ul>
        </nav>
    </header>