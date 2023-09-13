<?php
require 'vendor/autoload.php';
$router = new AltoRouter();
$router->setBasePath('/module-connexionb2');
use App\controller;
use App\class;

$router->map( 'GET', '/', function(){
    require_once "home.php";
});





$router->map( 'GET', '/inscription', function(){
    require_once "./view/inscription.php";
}, "inscription");

$router->map( 'POST', '/inscription', function(){
    require "/view/inscription.php";
} , "inscription_post");

$router->map( 'GET', '/connexion', function(){
    require "view/connexion.php";
});























$match = $router->match();

if( is_array($match) && is_callable( $match['target'] ) ) {
	call_user_func_array( $match['target'], $match['params'] ); 
} else {
	header( $_SERVER["SERVER_PROTOCOL"] . ' 404 Not Found');
}
?>