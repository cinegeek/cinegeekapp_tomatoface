<?php
require_once("lib/movie/rottentomato.php");
require_once("lib/yuhhh/translate.php");
$trans = new Translator();
$rapi = new RottenAPI();
if($trans->TranslateToEn($_POST['str']) != ""){
	$m = $trans->TranslateToEn($_POST['str']);
	echo " <span class='font5'>".$rapi->get_point($m)."%</span>";
}else{
	echo " <span class='font5'>".$rapi->get_point($_POST['str'])."%</span>";
}