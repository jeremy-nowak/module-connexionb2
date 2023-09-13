
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
            return "update accomplished";
        }
        else{
            echo "update failed";
            return "update failed";
        }
    }


    public function login($login, $password){


        $sql = "SELECT * FROM user WHERE login = :login";
        $statement = $this->bdd->prepare($sql);
        $statement->execute([':login' => $login]);
        $user = $statement->fetch(PDO::FETCH_ASSOC);
        if ($user) {

//             id' => int 22
//   'login' => string 'a' (length=1)
//   'firstname' => string 'a' (length=1)
//   'lastname' => string 'a' (length=1)
//   'password' => string '$

            if (password_verify($password, $user["password"])) {

                $_SESSION["user"]["id"] = $user["id"];
                $_SESSION["user"]["login"] = $user["login"];
                $_SESSION["user"]["firstname"] = $user["firstname"];
                $_SESSION["user"]["lastname"] = $user["lastname"];


                echo "loginOK";
            } else {
                echo "loginnotOK";
            }
        } else {
            echo "loginnotOK";
        }

    }
}

?>