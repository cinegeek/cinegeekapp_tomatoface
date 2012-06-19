<?php
require_once dirname(__FILE__).'/lib/facebook-php-sdk/src/facebook.php';
session_start();
$facebook = unserialize($_SESSION['faceid']);

if ($facebook) {
  try {
    // echo "あああ";
  	$user = $facebook->getUser();
  	$params = array(
  		'message'       =>  $_POST['text'],
        'name'          =>  "映画のモノサシ",
        'caption'       =>  "http://cinegeek.net/tomatoface/",
        'description'   =>  "あなたの映画センスは何%？『映画のモノサシ』で評価してもらいましょう！",
        'link'          =>  "http://cinegeek.net/tomatoface/",
        'picture'       =>  "http://cinegeek.net/tomatoface/img/socialimg.gif",
  	);
    $result = $facebook->api('/me/feed','POST',$params);
  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}