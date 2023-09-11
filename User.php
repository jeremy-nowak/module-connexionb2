
<?php

class User{


private $login;
private $firstname;
private $lastname;

    public function __construct( $login = null, $firstname = null, $lastname = null) {


    if (isset($_SESSION["user"])) {
        
        $this -> login = $_SESSION["user"]["login"];
        $this -> firstname = $_SESSION["user"]["firstname"];
        $this -> lastname = $_SESSION["user"]["lastname"];;
    }


    }


        public function checkLogin($login){

    $pdo = new PDO('mysql:host=localhost;dbname=moduleconnexionb2;charset=utf8', 'root', '');
    $sql = "SELECT login FROM user WHERE login = :login";
    
    $statement = $pdo -> prepare($sql);
    $statement -> execute([':login' => $login]);
    $student = $statement -> fetch(PDO::FETCH_ASSOC);

      if($student){
    
         echo "existant";

    }
        else{
            echo "inexistant";
        }
}
}



?>