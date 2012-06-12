<?php
require_once("lib/movie/rottentomato.php");
require_once("lib/yuhhh/translate.php");
$trans = new Translator();
$rapi = new RottenAPI();
$m = $trans->TranslateToEn($_POST['str']);
echo $m;
echo "<img src='".$rapi->get_poster($m)."'/>";
echo $rapi->get_point($m);