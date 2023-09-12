
<?php
require_once "Database.php";

class User extends Database{

// pro $bdd;
private $login;
private $firstname;
private $lastname;

    public function __construct( $login = null, $firstname = null, $lastname = null) {

        parent::__construct();

    if (isset($_SESSION["user"])) {
        
        $this -> login = $_SESSION["user"]["login"];
        $this -> firstname = $_SESSION["user"]["firstname"];
        $this -> lastname = $_SESSION["user"]["lastname"];;
    }


    }


        public function checkLogin($login){

    $sql = "SELECT login FROM user WHERE login = :login";
    $statement = $this->bdd->prepare($sql);
    $statement->execute([':login' => $login]);
    $student = $statement->fetch(PDO::FETCH_ASSOC);

      if($student){
    
         echo "existant";

    }
        else{
            echo "inexistant";
        }
}
}



?>