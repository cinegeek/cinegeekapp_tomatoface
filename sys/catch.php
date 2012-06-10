<?php
require 'lib/facebook-php-sdk/src/facebook.php';
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
}
$user = $facebook->getUser();
$num = count($user_movies['data']);

$name1 =<<<EOF
<div class="fukicont">
<img class="radirect" onLoad='proimg()' src='http://graph.facebook.com/{$user}/picture?type=large' width='150'/>
<p class="cont1 cont">ようこそ。<span class="font1">{$user_profile['name']}</span>さん</p>
<p class="cont2 cont">さっそくですが...<br/>あなたは<span class="font2">facebook</span>上で<br/><span class="font3">{$num}</span>コの映画に『イイネ』しているようですねぇ。<br/>それでは順番に観て行きましょう。</p>
<div>
EOF;
$name2 =<<<EOF
<div class="fukicont">
<img class="radirect" onLoad='proimg()' src='http://graph.facebook.com/{$user}/picture?type=large' width='150'/>
<p class="cont1 cont">残念です<span class="font1">{$user_profile['name']}</span>さん。</p>
<p class="cont2 cont">あまり映画はお好きでないのですか...？<br/><span class="font2">facebook</span>で好きな映画を追加して<br/>もう一度挑戦してみてください。
<a href="http://ja-jp.facebook.com/" target="_blank" ><img class="facebookbtn" src="img/facebookbtn.png" onmouseover="this.src='img/facebookbtn_on.png'" onmouseout="this.src='img/facebookbtn.png'" alt="login"/></a></p>
<div>
EOF;
switch ($_POST['value']) {
case 'name':
switch ($num) {
case 0:
echo $name2;
break;

default:
echo $name1;
break;
}
break;

case 'facebookmovies':
$fm_num = $_POST['fm_num'];
$movie_info = file_get_contents("http://graph.facebook.com/".$user_movies['data'][$fm_num]['id']);
$info = json_decode(trim($movie_info));
echo <<<EOF
<div class='fukicont'><img class="radirect" src='{$info->picture}'/>
<p>ふむふむ。</br>『 <span class='font2'>{$user_movies['data'][$fm_num]['name']}</span> 』</p></div>
EOF;
break;
}

?>