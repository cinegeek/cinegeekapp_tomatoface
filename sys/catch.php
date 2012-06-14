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
$user = $facebook->getUser();
$num = count($user_movies['data']);

switch ($_POST['value']) {
case 'name':
switch ($num) {
case 0:
$name2 =<<<EOF
<div class="fukicont">
<img class="radirect" onLoad='proimg()' src='http://graph.facebook.com/{$user}/picture?type=large' width='150'/>
<p class="cont1 cont">残念です<span class="font1">{$user_profile['name']}</span>さん。</p>
<p class="cont2 cont">あまり映画はお好きでないのですか...？<br/><span class="font2">facebook</span>で好きな映画を追加して<br/>もう一度挑戦してみてください。
<a href="http://ja-jp.facebook.com/" target="_blank" ><img class="facebookbtn" src="img/facebookbtn.png" onmouseover="this.src='img/facebookbtn_on.png'" onmouseout="this.src='img/facebookbtn.png'" alt="login"/></a></p>
<div>
EOF;
echo $name2;
break;

default:
$name1 =<<<EOF
<div class="fukicont">
<img class="radirect" onLoad='proimg()' src='http://graph.facebook.com/{$user}/picture?type=large' width='150'/>
<p class="cont1 cont">ようこそ。<span class="font1">{$user_profile['name']}</span>さん</p>
<p class="cont2 cont">さっそくですが...<br/>あなたは<span class="font2">facebook</span>上で<br/><span class="font3">{$num}</span>コの映画に『イイネ』しているようですねぇ。<br/>それでは順番に観て行きましょう。
<br/><a href="#" onclick="movieStart();return false;"><img class="nextbtn" src="img/next_btn.gif" onmouseover="this.src='img/next_btn_on.gif'" onmouseout="this.src='img/next_btn.gif'" alt="next"/></a></p>
<div>
EOF;
echo $name1;
break;
}
break;

case 'facebookmovies':
$fm_num = $_POST['fm_num'];
$movie_info = file_get_contents("http://graph.facebook.com/".$user_movies['data'][$fm_num]['id']);
$info = json_decode(trim($movie_info)); 
if($info->picture != ""){
  $imgurl = $info->picture;
}else{
  $imgurl = "img/tomatoimgdammy.gif";
}
if($_POST['fm_num'] != $num - 1){
$ranum = Math.floor( Math.random() * 7);
$str_arr = ["ふむふむ。","あ～なるほどね。","お！","ふーむ。","ほうほう。","そうきたかっ！","あるね！"];
echo <<<EOF
<img class="radirect fbmimg" src='{$imgurl}'/>
<p>{$str_arr[$ranum]}</br>『 <span class='font2'>{$user_movies['data'][$fm_num]['name']}</span> 』<br/>お次はと...</p>
<p><img src='img/loadinfo.gif'/><p>
EOF;
}else{
echo <<<EOF
<img class="radirect fbmimg" src='{$imgurl}'/>
<p>{$str_arr[$ranum]}</br>『 <span class='font2'>{$user_movies['data'][$fm_num]['name']}</span> 』<br/>以上ですべてですね。</p>
EOF;
}
break;
}
?>