
<?php
abstract class Database{


    private $pdo;

    public function __construct($pdo){
        
    $this->pdo = new PDO('mysql:host=localhost;dbname=moduleconnexionb2;charset=utf8', 'root', '');

    }

}


?>