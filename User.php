
<?php
require_once "Database.php";

class User extends Database
{

    // pro $bdd;
    private $login;
    private $firstname;
    private $lastname;
    private $password;
    private $id;

    public function __construct($login = null, $firstname = null, $lastname = null)
    {

        parent::__construct();

        if (isset($_SESSION["user"])) {

            $this->login = $_SESSION["user"]["login"];
            $this->firstname = $_SESSION["user"]["firstname"];
            $this->lastname = $_SESSION["user"]["lastname"];;
        }
    }
    public function getLogin()
    {
        return $this->login;
    }

    public function getFirstname()
    {
        return $this->firstname;
    }

    public function getLastname()
    {
        return $this->lastname;
    }

    public function setLogin($login)
    {
        $this->login = $login;
    }

    public function setFirstname($firstname)
    {
        $this->firstname = $firstname;
    }

    public function setLastname($lastname)
    {
        $this->lastname = $lastname;
    }
    public function getId()
    {
        return $this->id;
    }
    


    public function checkLogin($login)
    {

        $sql = "SELECT login FROM user WHERE login = :login";
        $statement = $this->bdd->prepare($sql);
        $statement->execute([':login' => $login]);
        $student = $statement->fetch(PDO::FETCH_ASSOC);

        if ($student) {

            echo "existant";
            return "existant";
        } else {
            echo "inexistant";
            return "inexistant";
        }

    }


    public function register($login, $password, $password_conf, $lastname, $firstname )
    {
        
        var_dump($password, $password_conf);

        if ($this->checkLogin($login) === "inexistant") {

            $password = trim($password);
            $password_conf = trim($password_conf);

            if ($password == $password_conf) {

                $login = htmlspecialchars($login);
                $firstname = htmlspecialchars($firstname);
                $lastname = htmlspecialchars($lastname);
                $password = htmlspecialchars($password);
                $password = password_hash($password, PASSWORD_DEFAULT);

                $sql = "INSERT INTO `user`(`login`, `firstname`, `lastname`, `password`) VALUES (:login,:firstname, :lastname, :password)";
                $prepare = $this->bdd->prepare($sql);
                $prepare->execute([':login' => $login, ':firstname' => $firstname, ':lastname' => $lastname, ':password' => $password]);



                if ($prepare) {
                    echo "registerOK";
                } else {
                    echo "registernotOK";
                }
            } 
            else {
                echo "Password aren't the same";
            }
        } 

    }
    
    public function update($login, $firstname, $lastname, $password, $id){

        $login = htmlspecialchars($login);
        $firstname = htmlspecialchars($firstname);
        $lastname = htmlspecialchars($lastname);
        $password = htmlspecialchars($password);
        $id = htmlspecialchars($id);
        $password = password_hash($password, PASSWORD_DEFAULT);
        


        $sql = "UPDATE `user` SET `login`=:login,`firstname`=:firstname,`lastname`=:lastname, `password`=:password WHERE id = :id";
        $prepare = $this->bdd->prepare($sql);
        $prepare->execute([':login' => $login, ':firstname' => $firstname, ':lastname' => $lastname, ':password' => $password]);
        if ($prepare) {
            echo "update accomplished";
        }
        else{
            echo "update failed";
        }
    }
}

?>