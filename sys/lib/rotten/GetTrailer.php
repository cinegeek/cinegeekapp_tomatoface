<?php

$name = $_POST['name'];

$trailer = file_get_contents("http://www.trailerapi.com/t/".$name);

if($trailer == "none"){
   echo"Sorry no movie found.";
 }
 else{
   echo $trailer;
 }
?>
