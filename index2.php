<?php
require 'lib/facebook-php-sdk/src/facebook.php';
require 'lib/database.php';
$facebook = new Facebook(array(
  'appId'  => '378919358825604',
  'secret' => '82259db82706f23f678d061f41304667',
));
$user = $facebook->getUser();
if ($user) {
  try {
    $user_movies = $facebook->api('/me/movies');
    $user_profile = $facebook->api('/me');
  } catch (FacebookApiException $e) {
    error_log($e);
    $user = null;
  }
}
if ($user) {
  $logoutUrl = $facebook->getLogoutUrl();
} else {
  $loginUrl = $facebook->getLoginUrl();
  // $loginUrl = $facebook->getLoginUrl($params = array('scope' => "publish_stream"));
}
?>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <title></title>
</head>
<body>
<?php 
if($user){
  echo "<p><a href='".$logoutUrl."'>logout</a></p>";
  $moviestr= "";
  foreach ($user_movies['data'] as $value) {
    echo "<p>".$value['name']."</p>";
    $movie_info = file_get_contents("http://graph.facebook.com/".$value['id']);
    $info = json_decode(trim($movie_info));
    $moviestr .=$value['name'].",";
    echo "<img src='".$info->picture."'/>";
    echo $info->picture."?type=small";

  }
  $moviestr = substr($moviestr, 0, -1);
  $img = "http://graph.facebook.com/".$user."/picture?type=large";
  echo $img;
  setDatabase($user_profile['id'],$user_profile['name'],$user_profile['gender'],$img,$moviestr);

  // //post
  // try {
  //     $params = array(
  //         'message'       =>  "Hurray! This works :)",
  //         'name'          =>  "This is my title",
  //         'caption'       =>  "My Caption",
  //         'description'   =>  "Some Description...",
  //         'link'          =>  "http://stackoverflow.com",
  //         'picture'       =>  "http://i.imgur.com/VUBz8.png",
  //     );

  //     $post = $facebook->api("/me/feed","POST",$params);

  //     echo "Your post was successfully posted to UID: $user";

  // }
  // catch (FacebookApiException $e) {
  //    $result = $e->getResult();
  //    print_r($result);
  // }
}else{
  echo "<p><a href='".$loginUrl."'>login</a></p>";
}
?>
</body>
</html>
