<?php
require 'lib/facebook-php-sdk/src/facebook.php';
require 'lib/yuhhh/imagecrop.php';
session_start();
$facebook = unserialize($_SESSION['faceid']);
if ($facebook) {
  try {
    $user_movies = $facebook->api('/me/movies');
    $user_profile = $facebook->api('/me');
  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}
foreach ($user_movies['data'] as $value) {
	// echo "<p>".$value['name']."</p>";
	// $movie_info = file_get_contents("http://graph.facebook.com/".$value['id']);
	// $info = json_decode(trim($movie_info));
	// $moviestr .=$value['name'].",";
	// echo "<img src='".$info->picture."?type=small'/>";
}
$user = $facebook->getUser();
echo <<<EOF
<img onLoad='proimg()' src='http://graph.facebook.com/{$user}/picture?type=large'/>
EOF;
?>