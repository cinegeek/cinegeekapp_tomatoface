<?php
require_once dirname(__FILE__)."/lib/movie/rottentomato.php";
require_once dirname(__FILE__)."/lib/yuhhh/Translate.php";
$trans = new Translator();
$rapi = new RottenAPI();
$trans_str = $trans->TranslateToEn($_POST['str']);
if(isset($trans_str) || $trans_str != ""){
	$point = $rapi->get_point($trans_str);
	$title = $rapi->get_title($trans_str);
}else{
	$point = $rapi->get_point($_POST['str']);
	$title = $rapi->get_title($_POST['str']);
}
if($point > 50){
	$tomato = "<img src='img/tomato_red.jpg'/>";
	echo $title." <span class='font6'>".$tomato."<span class='point font5'>".$point."%</span>";	
}else{
	$tomato = "<img src='img/tomato_green.jpg'/>";
	echo $tomato."<span class='point font7'>".$point."%</span>";	
}
