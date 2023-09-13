<?php
if(!isset($_SESSION)){
    session_start();
    $_SESSION["url"] = __DIR__;
    $_SESSION["uri"] = $_SERVER["REQUEST_URI"];
}
require_once $_SESSION["url"]."/view/header.php";

?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./script/script.js"></script>
    <title>Module de connexion</title>
</head>
<body>
    <a href="inscription">Inscription</a>
    <a href="view/connexion.php">Connexion</a>
</body>
</html>
