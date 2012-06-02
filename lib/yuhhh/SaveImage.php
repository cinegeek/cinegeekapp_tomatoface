<?php

function saveimage($url,$title){
	
	list($width,$height) = getimagesize($url);
	$src = imagecreatefromjpeg($url);
	$per = 300 / $width;
	$cwidth = 300;
	$cheight = $height*$per;
	$dst = imagecreatetruecolor($cwidth,$cheight);
	imagecopyresampled($dst,$src,0,0,0,0,$cwidth,$cheight,$width,$height);
	imagejpeg($dst,$title);
	imagedestroy($dst);
}