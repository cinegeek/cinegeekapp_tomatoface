<?php
function setDatabase($usr_id,$name,$gender,$pic,$movies){
	$url = "localhost";
	$user = "root";
	$pass = "19850518";
	$db1 = "cinegeekapp_tomatoface";
  	$con = mysql_connect($url,$user,$pass);
	if (!$con)
	  {
	  die('Could not connect: ' . mysql_error());
	  }
	mysql_query("SET NAMES 'utf8'");
	mysql_select_db($db1, $con);
	mysql_query("INSERT INTO user_info (id, name ,gender, pic, movies)
	VALUES ('".$usr_id."','".$name."','".$gender."','".$pic."','".$movies."')");
	mysql_close($con);
}