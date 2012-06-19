<?php
require_once dirname(__FILE__).'/lib/yuhhh/database.php';
require_once dirname(__FILE__).'/lib/facebook-php-sdk/src/facebook.php';
session_start();
$facebook = unserialize($_SESSION['faceid']);

$user = $facebook->api('/me');
$id = $user['id'];
$name = $_POST['name'];
$img = $_POST['pic'];
$movies = $_POST['movies'];

setDatabase($id,$name,$img,$movies);
session_destroy();
echo $id;