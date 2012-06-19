<?php
function setDatabase($usr_id,$name,$pic,$movies){
	$url = "mysql427.db.sakura.ne.jp";
	$user = "cinegeek1985";
	$pass = "tsujimoto0518";
	$db1 = "cinegeek1985_apps";
  	$con = mysql_connect($url,$user,$pass);
	if (!$con)
	  {
	  	die('Could not connect: ' . mysql_error());
	  }
	mysql_query("SET NAMES 'utf8'");
	mysql_select_db($db1, $con);
	mysql_query("INSERT INTO user_info (id, name , img, movies)
	VALUES ('".$usr_id."','".$name."','".$pic."','".$movies."')");
	mysql_close($con);
}